import { render, screen } from '@testing-library/react';
import React from "react";
import NotificationContainer, { Config } from "../NotificationContainer";

const message = "Your item has been updated.";
const props: Config & { id: number; cleared: () => void } = {
  id:1,
  cleared: jest.fn,
  message
}

describe("<NotificationContainer />", () => {
  it("should render correctly with default props", async () => {
    const wrapper = render(
      <NotificationContainer {...props} />
    );
    await screen.findByText(message)
    expect(wrapper).toMatchSnapshot();
  });

  it("Can find notification", async () => {
    render(<NotificationContainer {...props} />);

    await screen.findByText(message)

    expect(screen.getByText(/Your item has been updated./i)).toBeInTheDocument();
  });
});