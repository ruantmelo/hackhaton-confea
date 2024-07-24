'use client'

import { DropdownMenu, DropdownMenuShortcut, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { Avatar, AvatarImage,AvatarFallback } from "../ui/avatar"
import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu"
import { signOut, useSession } from "next-auth/react"
import { Usuario } from "@/types/next-auth"

type UserMenuProps = DropdownMenuProps

export const UserMenu = (props: UserMenuProps) => {
 
  const session = useSession()

  const handleSignOut = () => signOut({
    callbackUrl: "/login"
  })

  if(!session.data) return null

  const user = session.data.user as User
  const initials = user.name.split(' ').slice(0,2).map((n: string) => n[0]).join('') as string

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-12 w-12">
            <AvatarImage src={undefined} alt="@shadcn" />
            <AvatarFallback className="bg-gray-200">{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session.data.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.data.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            Perfil
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Configurações
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
         
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut} className="text-red-500">
          Sair
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}