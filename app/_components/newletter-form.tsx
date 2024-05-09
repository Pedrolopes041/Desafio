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
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Fill in the name",
  }).max(50, {
    message: "You have exceeded the character limit"
  }),
  age: z.coerce.number().positive().min(2, {
    message: "Fill in the age",
  }).max(100, {
    message: "Age must be less than or equal to 100",
  }),
  state: z.string().min(4, {
    message: "Fill in the state with at least 4 characters",
  }).max(50, {
    message: "state must be less than or equal to 50",
  }),
  neighborhood: z.string().min(2, {
    message: "Fill int the neighborhood",
  }).max(50, {
    message: "Neighborhood must be less than or equal to 50",
  }),
  street: z.string().min(2, {
    message: "Fill int the street",
  }).max(50, {
    message: "Street must be less than or equal to 50",
  }),
  biography: z.string().min(2, {
    message: "Fill in the biography",
  }),
});

const NewsletterForm = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: 0,
      state: "",
      neighborhood: "",
      street: "",
      biography: "",
    },
  });

  const router = useRouter();

  const HandleHomePage = () => {
    router.push("/");
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { name, age, biography, street, neighborhood, state } = values;
    setIsLoading(true);
    try {
      await fetch(`/api/user`, {
        method: "POST",
        body: JSON.stringify({
          name,
          age,
          street,
          biography,
          state,
          neighborhood,
        }),
      });
      setIsAlertOpen(false);
      HandleHomePage();
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Neighborhood</FormLabel>
                    <FormControl>
                      <Input placeholder="Neighborhood" {...field} />
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
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
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
                      {loading && <Loader2 className="mr-2 h-4 animate-ping" />}
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
