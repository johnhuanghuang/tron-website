"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck, Book, Users, Cube, LinkSimple } from "@phosphor-icons/react";
import { CopyButton } from "@/components/ecosystem/CopyButton";
import { iconMap } from "@/lib/data/icon-map";
import { EcosystemProduct } from "@/lib/data/ecosystem-products";
import styles from "./ProductDetail.module.css";

export function ProductDetail({ product }: { product: EcosystemProduct }) {
  const Icon = iconMap[product.iconName];

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.container}>
          <Link href="/ecosystem" className={styles.backLink}>
            <ArrowLeft size={20} />
            Back to Ecosystem
          </Link>

          <div className={styles.heroContent}>
            <div className={styles.iconWrapper}>
              <Icon size={48} weight="fill" />
            </div>
            <div className={styles.heroInfo}>
              <h1 className={styles.title}>{product.name}</h1>
              <div className={styles.meta}>
                <span className={styles.category}>{product.category}</span>
                {product.externalUrl && (
                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    Official Website
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {product.tvl && (
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Cube size={20} weight="fill" />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statLabel}>TVL</span>
                  <span className={styles.statValue}>{product.tvl}</span>
                </div>
              </div>
            )}
            {product.users && (
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Users size={20} weight="fill" />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statLabel}>Users</span>
                  <span className={styles.statValue}>{product.users}</span>
                </div>
              </div>
            )}
            {product.volume24h && (
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Book size={20} weight="fill" />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statLabel}>24h Volume</span>
                  <span className={styles.statValue}>{product.volume24h}</span>
                </div>
              </div>
            )}
            {product.auditStatus && (
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <ShieldCheck size={20} weight="fill" />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statLabel}>Audit Status</span>
                  <span className={styles.statValue}>{product.auditStatus}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>About {product.name}</h2>
          <p className={styles.description}>{product.fullDescription}</p>
        </div>
      </section>

      {/* Contract Address Section */}
      {product.contractAddress && (
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contract Address</h2>
            <div className={styles.contractWrapper}>
              <div className={styles.contractAddress}>
                <LinkSimple size={18} className={styles.contractIcon} />
                <code className={styles.addressCode}>{product.contractAddress}</code>
              </div>
              <CopyButton text={product.contractAddress} />
            </div>
          </div>
        </section>
      )}

      {/* Tutorial Section */}
      {product.tutorialSteps && product.tutorialSteps.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>How to Get Started</h2>
            <div className={styles.tutorialSteps}>
              {product.tutorialSteps.map((step, index) => (
                <div key={index} className={styles.step}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <p className={styles.stepText}>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* News Section */}
      {product.news && product.news.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Latest News</h2>
            <div className={styles.newsGrid}>
              {product.news.map((item, index) => (
                <div key={index} className={styles.newsCard}>
                  <span className={styles.newsDate}>{item.date}</span>
                  <h3 className={styles.newsTitle}>{item.title}</h3>
                  <p className={styles.newsSummary}>{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
