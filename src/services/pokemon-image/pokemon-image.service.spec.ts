/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PokemonImageService } from './pokemon-image.service';

describe('Service: PokemonImage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonImageService]
    });
  });

  it('should ...', inject([PokemonImageService], (service: PokemonImageService) => {
    expect(service).toBeTruthy();
  }));
});
