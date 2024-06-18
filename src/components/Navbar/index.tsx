import { Link } from "react-router-dom"; 
import logoText from "../../assets/logo.png"
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuIndicator,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   NavigationMenuViewport
 } from "@/components/ui/navigation-menu"

export const Navbar = () => {

   return(
      <header>
         <nav className="flex items-center w-screen fixed justify-between gap-20 px-40 font-medium bg-zinc-200 text-zinc-600 p-2">
            <Link to="/" className="flex items-center gap-2">
                  <img src={logoText} alt="Investir Fácil" className="min-w-14 w-14" />
                  <h1 className="text-2xl text-zinc-700">Investir <span className=" text-green-600">Fácil</span></h1>
            </Link>
            <ul className="flex gap-10 items-center text-xl">
               <li><a href="#objetivo" className="hover:text-zinc-900">Nosso Objetivo</a></li>
               <li><a href="#aprenda" className="hover:text-zinc-900">Aprenda</a></li>
               <li>
               <NavigationMenu >
                  <NavigationMenuList>
                     <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-xl bg-transparent hover:bg-transparent">Investimentos</NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col gap-3 flex-nowrap justify-center w-full px-5 py-2 text-lg text-zinc-600 bg-neutral-100">
                           <Link to="/estrategias" className="w-52 flex justify-center">
                              <NavigationMenuLink className=" hover:text-zinc-900">
                                 Melhores Investimentos
                              </NavigationMenuLink>
                           </Link>
                           <Link to="/calculadora" className="w-52 flex justify-center">
                              <NavigationMenuLink className=" hover:text-zinc-900">
                                 Calculadora de Juros
                              </NavigationMenuLink>
                           </Link>
                           <Link to="/recomendacoes" className="w-52 flex justify-center">
                              <NavigationMenuLink className=" hover:text-zinc-900">
                                 Recomendações
                              </NavigationMenuLink>
                           </Link>
                        </NavigationMenuContent>
                     </NavigationMenuItem>
                  </NavigationMenuList>
                  </NavigationMenu>
               </li>
               <li><Link to="/contribuir" className="text-green-500 hover:text-green-800 transition-all">Contribuir</Link></li>
            </ul>
         </nav>
      </header>
   )
}