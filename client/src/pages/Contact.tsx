import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSubmitContact, useSubmitFeedback, useFeedbackList } from "@/hooks/use-api";
import { insertMessageSchema, insertFeedbackSchema, type InsertMessage, type InsertFeedback } from "@shared/schema";
import { SukunaButton } from "@/components/ui/SukunaButton";
import { CursedCard } from "@/components/ui/CursedCard";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Star, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<"message" | "feedback">("message");

  return (
    <div className="min-h-screen p-6 md:p-12 lg:p-24 flex flex-col lg:flex-row gap-12 items-start justify-center">
      
      {/* Left Column: Info */}
      <div className="lg:w-1/3 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-display font-bold text-white mb-4">
            FORM A <br/><span className="text-primary">BINDING PACT</span>
          </h1>
          <p className="text-muted-foreground font-mono">
            Send a message across the void. Whether it's a project inquiry or a challenge, I will respond.
          </p>
        </motion.div>

        <div className="space-y-4">
          <div className="flex items-center gap-4 text-white">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/30">
              <Mail className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-display uppercase tracking-widest">Email</p>
              <p className="font-mono">ryomen.sukuna@domain.dev</p>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-4 p-1 bg-white/5 border border-white/10 w-fit">
          <button
            onClick={() => setActiveTab("message")}
            className={cn(
              "px-6 py-2 font-display uppercase text-sm tracking-wider transition-all",
              activeTab === "message" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white"
            )}
          >
            Message
          </button>
          <button
            onClick={() => setActiveTab("feedback")}
            className={cn(
              "px-6 py-2 font-display uppercase text-sm tracking-wider transition-all",
              activeTab === "feedback" ? "bg-primary text-white shadow-lg" : "text-gray-400 hover:text-white"
            )}
          >
            Feedback
          </button>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="lg:w-1/2 w-full">
        <CursedCard className="w-full">
          {activeTab === "message" ? <ContactForm /> : <FeedbackForm />}
        </CursedCard>
      </div>
    </div>
  );
}

function ContactForm() {
  const { toast } = useToast();
  const mutation = useSubmitContact();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema)
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Pact Sealed", description: "Your message has been received." });
        reset();
      },
      onError: (err) => {
        toast({ title: "Cursed Energy Failure", description: err.message, variant: "destructive" });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-display uppercase tracking-widest text-primary">Name</label>
        <input
          {...register("name")}
          className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono"
          placeholder="Sorcerer Name"
        />
        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-display uppercase tracking-widest text-primary">Email</label>
        <input
          {...register("email")}
          className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono"
          placeholder="contact@domain.com"
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-display uppercase tracking-widest text-primary">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono resize-none"
          placeholder="State your business..."
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <SukunaButton type="submit" className="w-full" disabled={mutation.isPending} isLoading={mutation.isPending}>
        {mutation.isPending ? "Sealing..." : "Send Message"} <Send className="w-4 h-4 ml-2" />
      </SukunaButton>
    </form>
  );
}

function FeedbackForm() {
  const { toast } = useToast();
  const mutation = useSubmitFeedback();
  const { data: feedbackList } = useFeedbackList();
  
  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<InsertFeedback>({
    resolver: zodResolver(insertFeedbackSchema),
    defaultValues: { rating: 5 }
  });

  const rating = watch("rating");

  const onSubmit = (data: InsertFeedback) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Feedback Recorded", description: "Your energy has been added to the void." });
        reset();
      },
      onError: (err) => {
        toast({ title: "Error", description: err.message, variant: "destructive" });
      }
    });
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-display uppercase tracking-widest text-primary">Rate the Domain</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setValue("rating", star)}
                className={cn(
                  "p-2 hover:scale-110 transition-transform",
                  rating >= star ? "text-primary fill-primary" : "text-gray-600"
                )}
              >
                <Star className={cn("w-6 h-6", rating >= star && "fill-current")} />
              </button>
            ))}
          </div>
          {errors.rating && <p className="text-red-500 text-xs">{errors.rating.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-display uppercase tracking-widest text-primary">Comment</label>
          <textarea
            {...register("comment")}
            rows={3}
            className="w-full bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono resize-none"
            placeholder="Your thoughts..."
          />
          {errors.comment && <p className="text-red-500 text-xs">{errors.comment.message}</p>}
        </div>

        <SukunaButton type="submit" className="w-full" disabled={mutation.isPending} isLoading={mutation.isPending}>
          {mutation.isPending ? "Submitting..." : "Submit Feedback"}
        </SukunaButton>
      </form>

      {/* Recent Feedback List */}
      <div className="pt-8 border-t border-white/10">
        <h3 className="text-sm font-display uppercase tracking-widest text-muted-foreground mb-4">Recent Whispers</h3>
        <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
          {feedbackList?.map((item, idx) => (
            <div key={idx} className="bg-white/5 p-4 border-l-2 border-primary">
              <div className="flex justify-between items-start mb-2">
                <div className="flex text-primary">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] text-gray-500 font-mono">
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-gray-300 font-mono">"{item.comment}"</p>
            </div>
          ))}
          {(!feedbackList || feedbackList.length === 0) && (
            <p className="text-sm text-gray-500 italic">No whispers yet...</p>
          )}
        </div>
      </div>
    </div>
  );
}
