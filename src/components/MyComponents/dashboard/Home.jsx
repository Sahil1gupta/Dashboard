import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "../../ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";

import { Switch } from "@/components/ui/switch";
console.log( import.meta.env.MODE);
const BASE_URL =  import.meta.env.MODE=== 'production' 
  ? 'https://farmers-friend.onrender.com' 
  : '/api';
  console.log( import.meta.env.MODE);
  console.log(BASE_URL)
function Home() {
  const [crops, setCrops] = useState([]);
  const [rice, setRice] = useState([]);

  //all crops api
  useEffect(() => {
    fetch(`${BASE_URL}/crops/get`)
      .then((response) => response.json())
      .then((result) => {
        setCrops(result);
        setRice(result[0]);
        console.log(result);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(crops);
  console.log(rice);

  const notifications = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Work in Progress</CardTitle>
          <CardDescription>
            This project is under development , Unlock all features and get
            unlimited access to our platform.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button size="sm" className="w-full">
            See you soon
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            {/* <Avatar>
              <AvatarImage src="src\assets\sprouts.png" />
              <AvatarFallback className="bg-blue-500 text-black">
                CN
              </AvatarFallback>
            </Avatar> */}
            Sprouts
          </CardTitle>
          <CardDescription>You have 3 messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <BellRing />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Toggle the Pump
              </p>
              <p className="text-sm text-muted-foreground">
                Send notifications to device.
              </p>
            </div>
            <Switch />
          </div>
          <div>
            {[rice].map((rice, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {rice.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <b>Maximum Irrigation Moisture</b>&nbsp;-&nbsp;
                    {rice.maxIrrigationMoisture}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    <b>Minimum Irrigation Moisture</b>&nbsp;-&nbsp;
                    {rice.minIrrigationMoisture}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <b>Created at</b>&nbsp;-&nbsp; {rice.createdAt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Home;
