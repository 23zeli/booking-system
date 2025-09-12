import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from "./BookingForm";
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Booking Form', () => {
  it('renders Occasion', () => {
      render(
        <BookingForm
          date=""
          setDate={vi.fn()}
          time=""
          setTime={vi.fn()}
          guests={1}
          setGuests={vi.fn()}
          occasion="Birthday"
          setOccasion={vi.fn()}
          availableTimes={["17:00", "18:00"]}
          updateAvailableTimes={vi.fn()}
          handleSubmit={vi.fn()}
        />
      );
      const labelElement = screen.getByText("Occasion");
      expect(labelElement).toBeInTheDocument();
  });
})