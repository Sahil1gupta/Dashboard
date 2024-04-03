import React from 'react'
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

function Home() {
  return (
    <div>
        <Card>
            <CardHeader>
              <CardTitle>Work in Progress</CardTitle>
              <CardDescription>
                This project is under development , Unlock all features and get unlimited access to our
                platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                See you soon
              </Button>
            </CardContent>
          </Card>
    </div>
  )
}

export default Home