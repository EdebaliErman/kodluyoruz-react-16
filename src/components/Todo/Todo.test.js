import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index.js";


describe("Todo testleri", () => {
    let button, input

    beforeEach(() => {
        button = screen.getByText("Add")
        input = screen.getByLabelText("Text")
    })
    test('Varsayılan olrak verilen 3 nesne render edilmeli', () => {
        const items = screen.getAllByText(/Items/1)
        expect(items.length).toEqual(3)
    })
})