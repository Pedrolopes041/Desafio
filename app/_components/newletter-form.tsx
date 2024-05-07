"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Card, CardContent } from "./ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "fill in the name",
  }),
  age: z.coerce.number().min(2, {
    message: "fill in the age",
  }),
  street: z.string().min(2, {
    message: "fill int the street",
  }),
  biography: z.string().min(2, {
    message: "fill in the biography",
  }),
});

const NewsletterForm = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 0,
      street: "",
      biography: "",
    },
  });

  const router = useRouter();

  const HandleHomePage = () => {
    router.push("/");
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, age, biography, street } = values;
    try {
      await fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify({
          name,
          age,
          street,
          biography,
        }),
      });
      setIsAlertOpen(false);
      HandleHomePage();
    } catch (error) {}
  };

  return (
    <div className="flex justify-center items-center p-6">
      <Card className="w-full p-4 md:w-[550px]">
        <CardContent>
          <Form {...form}>
            <h2 className="font-bold text-2xl">Edit Profile</h2>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 mt-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Age</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Age" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="street"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="biography"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Biography</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type your message here." {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="default" className="w-full">
                    Save
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to change the information?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex flex-row gap-3">
                    <AlertDialogCancel className=" mt-0 w-full">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      type="button"
                      onClick={() => {
                        form.handleSubmit(onSubmit)();
                      }}
                      className="w-full"
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterForm;
