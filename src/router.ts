// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/docs`
  | `/docs/*`
  | `/docs/classes/content`
  | `/docs/classes/rebo`
  | `/docs/core/css-variable`
  | `/docs/core/introduction`
  | `/docs/core/pseudo-selector`
  | `/docs/core/responsive`
  | `/docs/core/type-and-property`
  | `/docs/core/values`
  | `/docs/function/makestyle`
  | `/docs/function/tenoxui`
  | `/docs/function/use`
  | `/docs/guide/configuration`
  | `/docs/guide/installation`
  | `/docs/guide/start`
  | `/docs/overview`
  | `/docs/test`

export type Params = {
  '/docs/*': { '*': string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
