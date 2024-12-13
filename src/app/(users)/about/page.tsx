import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4 text-gray-600">
            Welcome to Your Blog, a platform dedicated to exploring ideas,
            sharing knowledge, and inspiring minds. Founded in 2023, we've been
            on a mission to provide high-quality content on a wide range of
            topics including technology, lifestyle, travel, and food.
          </p>
          <p className="text-gray-600">
            Our team of passionate writers and experts work tirelessly to bring
            you the latest insights, trends, and stories that matter. We believe
            in the power of information and its ability to transform lives,
            spark curiosity, and foster community.
          </p>
        </div>
        <div className="relative h-64 md:h-full">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="About Your Blog"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Jane Doe",
            role: "Founder & Editor-in-Chief",
            image: "https://via.placeholder.com/300",
          },
          {
            name: "John Smith",
            role: "Senior Writer",
            image: "https://via.placeholder.com/300",
          },
          {
            name: "Emily Brown",
            role: "Content Strategist",
            image: "https://via.placeholder.com/300",
          },
        ].map((member, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
