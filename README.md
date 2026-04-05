# OpenQMS 17025

An open, community-driven Quality Management System built step by step around **ISO/IEC 17025:2017** — the international standard for the competence of testing and calibration laboratories.

All content is licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/). Use it, adapt it, and contribute back.

## What is this?

Most laboratories pursuing ISO/IEC 17025 accreditation write the same documents from scratch. OpenQMS changes that by developing a complete, practical QMS in the open — clause by clause — so any laboratory can adopt it and build on it.

The site includes:
- Plain-language explanations of each ISO/IEC 17025 requirement
- Ready-to-adapt policy and procedure templates
- Implementation guidance with a battery materials characterization laboratory as a worked example

## Laboratory context

The procedures use a **lithium-ion battery cathode and anode materials characterization laboratory** as a concrete example throughout. The example scope includes elemental composition (ICP-OES), moisture content (Karl Fischer), particle size distribution (laser diffraction), specific surface area (BET), and organic impurity analysis (HPLC-UV). All templates are designed to be adapted to any laboratory type.

## Procedures

The QMS is organized into 22 procedures (00–21), each covering a specific element of ISO/IEC 17025:

| # | Procedure | Status | Appendices |
|---|---|---|---|
| 00 | Document and Record Control | Complete | 4 |
| 01 | Project Plan | Planned | — |
| 02 | Quality Policy | Planned | — |
| 03 | Quality Manual | Complete | — |
| 04 | Competence, Training and Awareness | Complete | 4 |
| 05 | Addressing Risks and Opportunities | Complete | 1 |
| 06–21 | Remaining procedures | Planned | — |

## AI-assisted development

Content is drafted with the assistance of AI tools and reviewed by humans with ISO/IEC 17025 experience. This approach is [disclosed transparently](https://openqms.thelabguy.org/blog/ai-assisted-development) and aims to make quality management documentation more accessible, especially for small laboratories and those in developing countries.

## Local development

```bash
npm install
npm start
```

Opens a dev server at `http://localhost:3000` with hot reload.

## Build

```bash
npm run build
```

Generates static files into the `build/` directory. The build also validates all internal links.

## Deploy to GitHub Pages

```bash
USE_SSH=true npm run deploy
```

## Contributing

Contributions are welcome. If you have experience with ISO 17025, laboratory accreditation, or quality management:

- Open an issue to suggest improvements or report errors
- Submit a pull request with new content, templates, or corrections

## License

Documentation and templates: [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)
Site source code: [MIT](https://opensource.org/licenses/MIT)
