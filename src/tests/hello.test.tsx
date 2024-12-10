import React from "react";
import { render, screen } from "@testing-library/react";
import Hello from "../components/Hello";
import { describe, expect, test } from "vitest";

describe("컴포넌트 테스트", () => {
    test("Hello 컴포넌트 테스트", () => {
        render(<Hello name="world" />);
        expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    });
});
