import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon?: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  onNavigate?: (url: string) => void
}

export function TubelightNavBar({ items, className, onNavigate }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || '')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg border border-gray-200">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault()
                setActiveTab(item.name)
                if (onNavigate) {
                  onNavigate(item.url)
                } else {
                  // Fallback to default scroll behavior
                  const element = document.querySelector(item.url)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-gray-700 hover:text-black",
                isActive && "bg-gray-100 text-black",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              {Icon && (
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
              )}
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-green-50 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-green-600 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-green-400/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-green-400/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-green-400/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}