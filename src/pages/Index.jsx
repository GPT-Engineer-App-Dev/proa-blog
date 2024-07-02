import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Proa Boats Blog</h1>
        <p className="text-lg text-gray-600">Exploring the unique world of proa boats</p>
      </header>
      <main>
        <section className="my-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/proa_boat_intro.jpg" alt="Proa Boat Introduction" width={600} height={400} className="my-4 mx-auto" />
              <p>
                Welcome to our blog about proa boats. In this blog, we will explore the fascinating world of proa boats, their history, design, and advantages.
              </p>
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="my-8">
          <Card>
            <CardHeader>
              <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/images/proa_boat_history.jpg" alt="Proa Boat History" width={600} height={400} className="my-4 mx-auto" />
              <p>
                Proa boats have a rich history that dates back centuries. They were originally used by the Austronesian people for long-distance voyaging across the Pacific Ocean.
              </p>
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="my-8">
          <Card>
            <CardHeader>
              <CardTitle>Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                The design of proa boats is unique and efficient. They typically have an asymmetrical hull and are designed to sail with the wind on either side.
              </p>
            </CardContent>
          </Card>
        </section>
        <Separator />
        <section className="my-8">
          <Card>
            <CardHeader>
              <CardTitle>Advantages</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Proa boats offer several advantages, including speed, stability, and the ability to sail in shallow waters. They are also relatively easy to build and maintain.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Index;