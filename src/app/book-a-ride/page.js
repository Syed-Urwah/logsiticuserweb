import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function page() {
  return (
    <div className="lg:px-[240px] max-lg:px-[100px] my-7">
      <div className="mx-auto w-full sm:max-w-sm lg:max-w-full mb-5">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">BOOK A RIDE</h2>
      </div>
      <Card className="w-full py-6 bg-gray-100">
        <CardContent>
          <form className="pt-3 px-2 text-gray-500">
            <div className="grid w-full  items-center gap-4">

              <div className="flex max-md:flex-col md:justify-between">
                <div className="flex max-md:flex-col items-center  text-nowrap space-y-1.5">
                  <Label htmlFor="persons" className='text-base'>No of Persons</Label>
                  <Input id="name" className='lg:w-[250px] xl:w-[300px] ms-4' placeholder="Name of your project" />
                </div>
                <div className="flex items-center text-nowrap space-y-1.5 max-lg:mt-4">
                  <Label htmlFor="persons" className='text-base'>Vehicle's List</Label>
                  <Input id="name" className='lg:w-[250px] xl:w-[300px] ms-6' placeholder="Name of your project" />
                </div>
              </div>

              <div className="flex max-md:flex-col justify-between">
                <div className="flex items-center text-nowrap space-y-1.5">
                  <Label htmlFor="persons" className='text-base'>Contact Info</Label>
                  <Input id="name" className='lg:w-[250px] xl:w-[300px]  ms-7' />
                </div>
                <div className="flex items-center text-nowrap space-y-1.5 max-lg:mt-4">
                  <Label htmlFor="persons" className='text-base'>Total Km</Label>
                  <Input id="name" className='lg:w-[250px] xl:w-[300px] ms-5 max-xl:ms-14' placeholder="Name of your project" />
                </div>
              </div>

            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
