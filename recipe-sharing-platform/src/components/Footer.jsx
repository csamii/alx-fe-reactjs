import { ChefHat } from "lucide-react";
import Button from "./ui/Button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section 
        className="py-16 bg-black text-white"
        initial={{ opacity: 0, y: 50 }}  // start hidden and slightly down
        whileInView={{ opacity: 1, y: 0 }} // fade + slide up when in view
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }} // triggers only once
    >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
                <ChefHat className="h-12 w-12" />
            </div>
            <p className="text-xl mb-8 opacity-90 max-sm:text-sm">
                Join 2,000+ food lovers and get hand-picked recipes, cooking tips, and seasonal collections 
                delivered to your inbox every Tuesday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <div className="flex-1">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg text-black placeholder:text-muted-foreground"/>
                </div>
                <Button 
                    className="mx-auto px-8 bg-white text-black hover:bg-slate-500 hover:text-white hover:border-white"
                    title="Subscribe Free" 
                />
            </div>
            <p className="text-sm mt-4 opacity-75">
            ©RecipeBox 2025
            </p>
        </div>
      </motion.section>
  )
}

export default Footer