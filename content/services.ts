import { z } from "zod";
import { serviceSchema, type Service } from "@/lib/content/schemas";
import { servicesData } from "./services.data";

// The eight services from PRODUCT.md, interiors first (DESIGN.md → Services list).
// Localized slugs follow the keyword mapping in SEO.md.
export const services: Service[] = z.array(serviceSchema).parse(servicesData);
