/**
 * Utility function to conditionally combine classNames
 * Useful for managing complex Tailwind class combinations
 */

type ClassValue = string | undefined | null | boolean;
type ClassInput = ClassValue | ClassValue[];

export function cn(...classes: ClassInput[]): string {
  return classes
    .flat()
    .filter((className): className is string => typeof className === 'string' && className.length > 0)
    .join(' ');
}
