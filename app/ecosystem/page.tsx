"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Globe, Rocket, Trophy } from "@phosphor-icons/react";
import { ecosystemProducts, productCategories } from "@/lib/data/ecosystem-products";
import { ProductCard } from "@/components/ecosystem/ProductCard";
import { CategoryTabs } from "@/components/ecosystem/CategoryTabs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import styles from "./page.module.css";

export default function EcosystemPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return ecosystemProducts;
    return ecosystemProducts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <style jsx global>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-40px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(40px) scale(1.05); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, -20px); }
          66% { transform: translate(-20px, 20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.glowOrb1} />
          <div className={styles.glowOrb2} />
          <div className={styles.glowOrb3} />
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                <Globe size={16} weight="fill" />
                <span>Ecosystem</span>
              </div>
              <h1 className={styles.heroTitle}>TRON 生态矩阵</h1>
              <p className={styles.heroStats}>
                <span className={styles.statItem}>200+ DApps</span>
                <span className={styles.statDivider} />
                <span className={styles.statItem}>$12B+ TVL</span>
                <span className={styles.statDivider} />
                <span className={styles.statItem}>1亿+ 用户</span>
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Funding & Programs</h2>
            <p className={styles.sectionSubtitle}>
              Accelerate your project with grants, gas rebates, and investor connections
            </p>
            <div className={styles.programsGrid}>
              <Link href="/programs" className={styles.programCard}>
                <div className={styles.programIcon}>
                  <Rocket size={32} weight="fill" />
                </div>
                <h3>Funding Programs</h3>
                <p>TVL incentives, gas grants, and ecosystem fund up to $500K</p>
                <span className={styles.programLink}>Explore Programs →</span>
              </Link>
              <Link href="/mvb" className={styles.programCard}>
                <div className={styles.programIcon}>
                  <Trophy size={32} weight="fill" />
                </div>
                <h3>MVB Program</h3>
                <p>Most Valuable Builder acceleration program with $50K no-equity grant</p>
                <span className={styles.programLink}>Apply Now →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Ecosystem Grid */}
        <section className={styles.section}>
          <div className={styles.container}>
            {/* Category Tabs */}
            <div className={styles.tabsWrapper}>
              <CategoryTabs
                categories={productCategories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Products Grid */}
            <div className={styles.grid}>
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className={styles.empty}>
                <p>No products found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}