"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "@aws-amplify/ui-react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useUser } from "./UserContext";

export default function Page() {

  const { dispatch } = useUser();
  useEffect(() => {
    dispatch({ type: "SETPROJECT", payload: { projectName: "List of Projects" } })
  }, [])

  const projects = [
    {
      title: 'TechGenie',
      description: 'Smart, Fast, and Always Ready to Assist!',
      content: ' The chatbot crawls a customer’s website, indexes the content, including PDFs, and enables quick retrieval of information.',
      footer: <Link href="/projects/qchat" >Link <ArrowRightCircleIcon className="w-6" /></Link>
    }
  ]

  return (
    <main>
      <div className="flex gap-6">
        {projects?.map(item => {
          return (
            <Card key={item.title} className="w-96 bg-blue-50">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="hidden md:block">
                <p>{item.content}</p>
              </CardContent>
              <CardFooter>
                <p>{item.footer}</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </main>
  );
}
