"use client";

import styles from "./CategoryTabs.module.css";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className={styles.tabs}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`${styles.tab} ${activeCategory === category ? styles.active : ""}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}