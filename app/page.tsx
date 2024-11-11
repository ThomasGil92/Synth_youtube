"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getResume } from "@/actions/get-resume.action";
import { useState, useTransition } from "react";
import { Loader } from "./_components/loader";

export default function Home() {
  const [synthesis, setSynthesis] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const UrlSchema = z.object({
    url: z.string().min(11, {
      message: "Ceci ne semble pas être une URL ou un ID de vidéo Youtube",
    }),
  });

  const form = useForm<z.infer<typeof UrlSchema>>({
    resolver: zodResolver(UrlSchema),
    defaultValues: {
      url: "",
    },
  });

  function onSubmit(values: z.infer<typeof UrlSchema>) {
    setSynthesis(null);
    startTransition(async () => {
      try {
        const resume = await getResume(values.url);
        if (resume) {
          setSynthesis(resume);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-2/3 space-y-6'
        >
          <FormField
            control={form.control}
            name='url'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormDescription>Url ou Id de la vidéo.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>Résumer</Button>
        </form>
      </Form>
      {pending && (
        <div className='flex flex-col items-center'>
          <p>Chargement en cours...</p>
          <Loader/>
        </div>
      )}
      {synthesis && (
        <div id='markdown' className='w-2/3'>
          <ReactMarkdown>{synthesis}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
