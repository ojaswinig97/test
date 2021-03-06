/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export {
  ANNOTATION_LOCATION,
  ANNOTATION_ORIGIN_LOCATION,
  ANNOTATION_SOURCE_LOCATION,
  LOCATION_ANNOTATION,
  ORIGIN_LOCATION_ANNOTATION,
  SOURCE_LOCATION_ANNOTATION,
} from './annotation';
export {
  getEntitySourceLocation,
  parseLocationRef,
  parseLocationReference,
  stringifyLocationRef,
  stringifyLocationReference,
} from './helpers';
export type { Location, LocationSpec } from './types';
