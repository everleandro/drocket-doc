export interface DatesRange {
  from: Date;
  to: Date;
}

export interface Day {
  date: number;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
  isHighlighted: boolean;
  isHighlightStart: boolean;
  isHighlightEnd: boolean;
  isToday: boolean;
  isWeekend: boolean;
  isSaturday: boolean;
  isSunday: boolean;
}

export enum datePickerViewType {
  day,
  month,
  year,
}

  export interface DatesConfiguration {
    dates?: Array<Date>;
    from?: Date;
    to?: Date;
    daysOfMonth?: Array<number>;
    ranges?: Array<DatesRange>;
    days?: Array<number>;
    customPredictor?: (date: Date) => boolean;
  }

export interface Month {
  month: string;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
}

export interface Year {
  year: number;
  timestamp: number;
  isSelected: boolean;
  isDisabled: boolean;
}
