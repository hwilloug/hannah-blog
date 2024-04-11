import type { Meta, StoryObj } from "@storybook/react"

import EmailSignup from "../components/EmailSignup"

const meta: Meta<typeof EmailSignup> = {
  title: "EmailSignup",
  component: EmailSignup,
}

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = { args: {} }
