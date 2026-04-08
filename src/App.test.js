import { createElement } from 'react'
import { afterEach, test, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

// check if group name is group 7
test('renders group name on the page', () => {
    render(createElement(App))
    const groupName = screen.getByText(/Group 7/i)
    expect(groupName).toBeTruthy()
})

// check if team member name is Fadi Yousif
test('renders name Fadi Yousif on the page', () => {
    render(createElement(App))
    const name = screen.getByText(/Fadi Yousif/i)
    expect(name).toBeTruthy()
})

// check if team member name is Salman Aravai
test('renders name Salman Aravai on the page', () => {
    render(createElement(App))
    const name = screen.getByText(/Salman Aravai/i)
    expect(name).toBeTruthy()
})

// check if team member name is Ivan Herrera
test('renders name Ivan Herrera on the page', () => {
    render(createElement(App))
    const name = screen.getByText(/Ivan Herrera/i)
    expect(name).toBeTruthy()
})

// check if team member name is Nicole Ricare
test('renders name Nicole Ricare on the page', () => {
    render(createElement(App))
    const name = screen.getByText(/Nicole Ricare/i)
    expect(name).toBeTruthy()
})