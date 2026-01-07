import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'
import '../app/globals.css'
import './fonts.css'

// UI Components for Playground
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Separator } from '../components/ui/separator'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Item, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemGroup, ItemSeparator } from '../components/ui/item'
import { MapPin, Heart, ShoppingBag, MousePointerClick, Share2, Star, Calendar, Clock, ChevronRight, Phone, Mail, Utensils, Tag } from 'lucide-react'

// Playground components registry
const playgroundComponents = {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  // Icons
  MapPin,
  Heart,
  ShoppingBag,
  MousePointerClick,
  Share2,
  Star,
  Calendar,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  Utensils,
  Tag,
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    playground: {
      storyId: 'playground',
      components: playgroundComponents,
      introCode: `<Card className="w-[400px] shadow-card">
  <CardHeader>
    <Badge variant="warning" className="w-fit mb-2">Pending Setup</Badge>
    <CardTitle>Your Restaurant Name</CardTitle>
    <CardDescription>$X to spend on $Y or more</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">
      Edit this code to compose your own components!
    </p>
  </CardContent>
</Card>`,
    },
  },
  decorators: [
    (Story) => (
      React.createElement('div', {
        style: {
          fontFamily: "var(--font-satoshi), 'Satoshi', 'Inter', 'Helvetica Neue', Arial, sans-serif"
        }
      }, React.createElement(Story))
    ),
  ],
};

export default preview;