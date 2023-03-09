import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index.js";



describe("Counter test", () => {
    let increaseClick, decreaseClick, count
    beforeEach(() => {
        render(<Counter />)
        console.log("her testen önce çalışıcağım")
        increaseClick = screen.getByText("increase")
        decreaseClick = screen.getByText("decrease")
        count = screen.getByText("0")
    })
    beforeAll(() => {
        console.log("ilk başta birkez çalışıcağım")
    })
    afterAll(() => {
        console.log("En son çalışıcağım")
    })
    test('increase button', () => {
        userEvent.click(increaseClick)
        expect(count).toHaveTextContent("0")
    })
    test('decreaseClick button', () => {
        userEvent.click(decreaseClick)
        expect(count).toHaveTextContent("0")
    })

})
