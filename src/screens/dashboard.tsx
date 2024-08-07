import {
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";
import { LineChart as ActivityChart } from "../components/atoms/lineChart";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NetProfitCard } from "@/components/atoms/NetProfitCard";
import StarRating from "@/components/atoms/StarRating";
import Cards from "@/components/atoms/Card";
import MenuBar from "@/components/atoms/Menu";
import RecentOrders from "@/components/atoms/RecentOrders";

export function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[65px_1fr] lg:grid-cols-[80px_1fr]">
      <div className="hidden bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-3">
          <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
            <div className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="flex-1">
            <nav className="grid items-start  text-sm font-medium ">
              <div className="flex items-center gap-3 lg:gap-4 w-full  rounded-none py-4 text-blue-500 transition-all hover:text-primary">
                <div className="ml-2 bg-blue-500 h-7 w-[2px]" />
                <Home className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3 rounded-lg px-5 lg:px-6 py-4 text-muted-foreground transition-all hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3 rounded-lg px-5 lg:px-6 py-4 text-muted-foreground transition-all hover:text-primary">
                <Package className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3 rounded-lg px-5 lg:px-6 py-4 text-muted-foreground transition-all hover:text-primary">
                <Users className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3 rounded-lg px-5 lg:px-6 py-4 text-muted-foreground transition-all hover:text-primary">
                <LineChart className="h-5 w-5" />
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <Package2 className="h-6 w-6 text-blue-500" />
                </div>
                <div className="mx-[-0.65rem] mt-6 flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground">
                  <Home className="h-5 w-5" />
                  Dashboard
                </div>
                <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <ShoppingCart className="h-5 w-5" />
                  Orders
                </div>
                <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Package className="h-5 w-5" />
                  Products
                </div>
                <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <Users className="h-5 w-5" />
                  Customers
                </div>
                <div className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground">
                  <LineChart className="h-5 w-5" />
                  Analytics
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <Cards />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <div>
                <NetProfitCard />
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <ActivityChart />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <MenuBar />
            </div>
            <div className="col-span-1 md:col-span-2 lg:col-span-3">
              <RecentOrders />
            </div>
            <div className="col-span-1 md:col-span-1 lg:col-span-2">
              <StarRating />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
