"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EcosystemProduct } from "@/lib/data/ecosystem-products";
import { iconMap } from "@/lib/data/icon-map";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  product: EcosystemProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const Icon = iconMap[product.iconName];

  return (
    <a href={`/ecosystem/${product.slug}`} className={styles.card}>
      <div className={styles.cardInner}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconBg}>
            <Icon size={24} weight="fill" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.name}>{product.name}</h3>
            <span className={styles.category}>{product.category}</span>
          </div>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.footer}>
            <span className={styles.data}>{product.data}</span>
            <ArrowUpRight size={18} weight="bold" className={styles.linkIcon} />
          </div>
        </div>
      </div>
    </a>
  );
}