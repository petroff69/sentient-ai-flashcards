"use client";

import Image from "next/image";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
import Noise from "@/components/noise";
import { ToastContainer } from "react-toastify";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Toast Notification Container */}
            <ToastContainer />
            <Noise />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="z-10"
            >
                <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 dark:hover:bg-gray-700"
                    >
                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Sentient AI Flashcards is now public!
                        </p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-100"
                    >
                        Flashcards instantly{" "}
                        <span className="text-blue-600">wisdom,</span>{" "}
                        endlessly.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-5 max-w-prose text-zinc-700 dark:text-zinc-300 sm:text-lg"
                    >
                        Sentient AI lets you create powerful flashcards in
                        seconds. Just upload your notes and start mastering
                        concepts faster, with AI that helps you understand more
                        deeply.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            className={`bg-blue-700 hover:bg-blue-500 text-white dark:bg-blue-600 dark:hover:bg-blue-500 px-4 py-2 rounded ${buttonVariants(
                                {
                                    size: "lg",
                                    className: "mt-5",
                                }
                            )}`}
                            href="/generate"
                        >
                            Get started <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </MaxWidthWrapper>

                {/* Value Proposition Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative isolate"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        >
                            <motion.div
                                animate={{
                                    opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                    duration: 0.5,
                                    times: [0, 0.2, 0.4, 0.6],
                                    repeat: 2,
                                    repeatType: "loop",
                                }}
                                style={{
                                    clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                }}
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#89bcfc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            />
                        </div>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="mx-auto max-w-6xl px-6 lg:px-8"
                            >
                                <div className="mt-16 flow-root sm:mt-24">
                                    <div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-gray-800 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                        <Image
                                            src="/FlashCard-Generate.png"
                                            alt="product preview"
                                            width={1364}
                                            height={866}
                                            quality={100}
                                            className="rounded-md bg-white dark:bg-gray-900 p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Feature Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56 overflow-hidden"
                >
                    <div className="mb-12 px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl sm:text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mt-2 font-bold text-4xl text-gray-900 dark:text-gray-100 sm:text-5xl"
                            >
                                Start creating flashcards in seconds
                            </motion.h2>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                Creating flashcards from your PDF files has
                                never been easier than with FlashFathom AI
                            </p>
                        </div>
                    </div>

                    {/* Steps */}
                    <ol className="my-8 space-y-4 p-8 md:flex md:space-x-12 md:space-y-0">
                        {[1, 2, 3].map((step, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                                className="md:flex-1"
                            >
                                <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 dark:border-zinc-600 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                                    <span className="text-sm font-medium text-blue-600">
                                        Step {step}
                                    </span>
                                    <span className="text-xl font-semibold">
                                        {step === 1
                                            ? "Sign up for an account"
                                            : step === 2
                                            ? "Upload your PDF file"
                                            : "Start creating flashcards by typing"}
                                    </span>
                                    <span className="mt-2 text-zinc-700 dark:text-zinc-400">
                                        {step === 1
                                            ? "Either starting out with a free plan or choose our pro plan."
                                            : step === 2
                                            ? "We'll process your file and make it ready for you to create flashcards with it."
                                            : "It's that simple. Try out FlashFathom AI today"}
                                    </span>
                                </div>
                            </motion.li>
                        ))}
                    </ol>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="overflow-hidden"
                >
                    <FAQ />
                </motion.div>
            </motion.div>
        </div>
    );
}
