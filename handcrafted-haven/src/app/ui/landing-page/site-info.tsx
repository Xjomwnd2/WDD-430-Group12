'use client';

import Link from "next/link";
import { CircleHelp, CircleUser, Globe, Lock } from "lucide-react";
import styles from "./site-info.module.css";

export default function SiteInfoWrapper() {
  const cards = [
    {
      icon: <CircleUser strokeWidth={1.5} />,
      title: "About",
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
    {
      icon: <Globe strokeWidth={1.5} />,
      title: "Services",
      description:
        "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
    {
      icon: <CircleHelp strokeWidth={1.5} />,
      title: "Support",
      description:
        "Body text for whatever you'd like to claim. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
    {
      icon: <Lock strokeWidth={1.5} />,
      title: "Privacy",
      description:
        "Body text for whatever you'd like to type. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    },
  ];

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Site Info</h2>
      <div className={styles.container}>
        {cards.map((card, index) => (
          <SiteInfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
}

function SiteInfoCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <Link
      className={styles.card}
      href="#"
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}