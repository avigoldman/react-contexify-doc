import cx from "clsx";
import React from "react";

import styles from "./icon.module.css";

export function Delete() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#2c3e50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M4 7L20 7"></path>
      <path d="M10 11L10 17"></path>
      <path d="M14 11L14 17"></path>
      <path d="M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"></path>
    </svg>
  );
}

export function Send() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#2c3e50"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M10 14L21 3"></path>
      <path d="M21 3l-6.5 18a.55.55 0 01-1 0L10 14l-7-3.5a.55.55 0 010-1L21 3"></path>
    </svg>
  );
}

export interface ChevronProps {
  direction?: "up" | "down";
}

export function Chevron({ direction = "down" }: ChevronProps) {
  const classes = cx(styles.chevron, {
    [`${styles["chevron--down"]}`]: direction === "down",
    [`${styles["chevron--up"]}`]: direction === "up",
  });
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="#607D8B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      className={classes}
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M6 9L12 15 18 9"></path>
    </svg>
  );
}