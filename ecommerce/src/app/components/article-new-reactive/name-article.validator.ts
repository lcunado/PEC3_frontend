import { AbstractControl, ValidationErrors } from '@angular/forms';

export function NameArticleValidator(control: AbstractControl): ValidationErrors | null {
  const forbiddenNames = ['prueba', 'test', 'mock', 'fake'];
  const value = control.value?.toLowerCase().trim();

  return forbiddenNames.includes(value) ? { forbiddenName: true } : null;
}