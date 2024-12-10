import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Hi from "@/components/Hi";

describe("컴포넌트 테스트", () => {
    test("hi 컴포넌트 테스트", () => {
        render(<Hi name="world" />);
        expect(screen.getByText("Hi, world!")).toBeInTheDocument();
    });
});
