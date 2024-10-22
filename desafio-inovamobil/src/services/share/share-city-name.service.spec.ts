/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShareCityNameService } from './share-city-name.service';

describe('Service: ShareCityName', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareCityNameService]
    });
  });

  it('should ...', inject([ShareCityNameService], (service: ShareCityNameService) => {
    expect(service).toBeTruthy();
  }));
});
