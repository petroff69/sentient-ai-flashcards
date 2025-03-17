'use client'

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface FaqsCardProps {
    faqsList: {
        q: string;
        a: string;
    };
    idx: number;
}

const FaqsCard = ({ faqsList, idx }: FaqsCardProps) => {
    const answerElRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [answerHeight, setAnswerHeight] = useState("0px");

    const toggleAnswer = () => {
        const answerElHeight = answerElRef.current?.scrollHeight || 0;
        setIsOpen(!isOpen);
        setAnswerHeight(`${isOpen ? "0px" : `${answerElHeight}px`}`);
    };

    return (
        <motion.div
            className="space-y-3 mt-5 overflow-hidden border-b border-muted"
            key={idx}
            onClick={toggleAnswer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-foreground font-medium">
                {faqsList.q}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                        />
                    )}
                </svg>
            </h4>
            <div
                ref={answerElRef}
                className="duration-300"
                style={{ height: answerHeight }}
            >
                <div>
                    <p className="text-muted-foreground">{faqsList.a}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function FAQSection(): JSX.Element {
    const faqsList: { q: string; a: string }[] = [
        {
            "q": "Как AI превръща моето съдържание във флашкарти?",
            "a": "Нашият AI сканира съдържанието ви, избира най-важните идеи и термини и ги превръща във флашкарти, които помагат за подобряване на вашето обучение.."
          },
        [
  {
    "q": "Мога ли да персонализирам моите флашкарти?",
    "a": "Абсолютно! Можете да променяте въпросите, отговорите и дори да добавяте свои бележки, за да направите флашкартите по съобразени с вашия уникален стил на учене."
  },
  {
    "q": "Има ли лимит за флашкартите?",
    "a": "С основния план можете да създадете до 100 флашкарти. Про и Ентерпрайз плановете отключват неограничено създаване на флашкарти!"
  },
  {
    "q": "Предлагате ли режими за учене?",
    "a": "Да! Изследвайте различни режими за учене като разпределено повторение, тестове и практическо изпитване, за да укрепите знанието си."
  },
  {
    "q": "Мога ли да споделям моите флашкарти?",
    "a": "Определено! Споделяйте вашите флашкарти с приятели, учебни групи или дори ги публикувайте, за да може и другите да се възползват."
  }
]

    ];

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-foreground font-semibold">
                   Често задавани въпроси
                </h1>
                <p className="text-muted-foreground max-w-lg mx-auto text-lg">
                 Имате още въпроси? Проверете отговорите ни по-долу или се свържете с нас за допълнителна помощ.
                </p>
            </div>
            <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-14 max-w-2xl mx-auto">
                {faqsList.map((item, idx) => (
                    <FaqsCard key={idx} idx={idx} faqsList={item} />
                ))}
            </motion.div>
        </section>
    );
}
