import { FormatValuePipe } from './format-value.pipe';

describe('FormatValuePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatValuePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return blank for undefined value', () => {
    const pipe = new FormatValuePipe();
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return blank for zero value', () => {
    const pipe = new FormatValuePipe();
    expect(pipe.transform(0)).toBe('');
  });

  it('should return negative value correctly', () => {
    const pipe = new FormatValuePipe();
    expect(pipe.transform(-1)).toBe('-1');
  });

  it('should return positive value correctly', () => {
    const pipe = new FormatValuePipe();
    expect(pipe.transform(15)).toBe('15');
  });
});
