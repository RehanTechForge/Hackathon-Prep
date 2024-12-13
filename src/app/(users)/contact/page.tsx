import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6 text-gray-600">
            We'd love to hear from you. Please fill out the form below or reach
            out to us using the contact information provided.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <MailIcon className="w-6 h-6 mr-2 text-gray-600" />
              <span>contact@yourblog.com</span>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-6 h-6 mr-2 text-gray-600" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-6 h-6 mr-2 text-gray-600" />
              <span>123 Blog Street, City, Country</span>
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <Textarea id="message" placeholder="Your message" rows={5} />
          </div>
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
