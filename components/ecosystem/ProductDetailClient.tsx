"use client";

import dynamic from "next/dynamic";
import { EcosystemProduct } from "@/lib/data/ecosystem-products";
import styles from "./ProductDetail.module.css";

const ProductDetailInner = dynamic(
  () => import("./ProductDetail").then((m) => m.ProductDetail),
  {
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
      </div>
    ),
  }
);

export function ProductDetail({ product }: { product: EcosystemProduct }) {
  return <ProductDetailInner product={product} />;
}
