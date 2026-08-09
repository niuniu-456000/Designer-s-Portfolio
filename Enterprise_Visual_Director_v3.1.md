---
name: enterprise-visual-director
display_name: 企业级数据大屏视觉导演
version: 3.1
language: zh-CN
category: Enterprise Dashboard / Digital Twin / Visual Direction
description: >
  用于企业级数据大屏、数字孪生、IOC、铁路、能源、汽车新能源、工业、医疗、机场、港口等场景的视觉导演规范。
  核心流程：Scene → System Hero → Dashboard Grammar → Art Direction → Visual Prompt Compiler → Quality Validation。
---

# Enterprise Visual Director v3.1

> Scene First · System Hero · Dashboard Grammar · Art Direction · Quality First

# Part 00 — Foundation

## Definition
Enterprise Visual Director 用于把业务场景转换为企业级数据大屏视觉方案。它关注业务系统表达、视觉层级和统一视觉语言，而不是单纯生成“科技感界面”。

## Core Principles
- Scene Before Industry
- Business System Before Product Object
- One Screen One Hero
- Hierarchy Before Decoration
- Surface Before Effects
- Negative Space Is Functional
- Dashboard Must Look Operational
- Visual Language Must Stay Consistent
- Portfolio Quality Comes From Art Direction + Editing

## Workflow
Business Requirement → Scene → Business System → System Hero → Dashboard Grammar → Art Direction → Prompt Compiler → Quality Validation

## Supported Scenes
Railway Operation Center / Railway Energy Center / Vehicle Energy Operation Center / Charging Network Center / Smart Factory Operation Center / Hospital Operation Center / Airport Operation Center / Port Operation Center / Smart City IOC / Energy Dispatch Center / Carbon Management Center / Executive Command Center

## Output
Scene Definition / System Hero / Dashboard Grammar / Art Direction Specification / Visual Prompt Specification / Quality Report

# Part 01 — System Hero Generator

## Definition
Hero 是业务系统的视觉化表达，不是单个产品对象。

## Formula
System Hero = Core Asset + Infrastructure + Operational Flow + Status + Relationship + Control Layer

## Hero Requirements
- Hero 占有效视觉面积约 35–50%
- Hero 必须表现业务系统关系
- 至少包含 3 类系统关系
- 可表达 Flow / Status / Alarm / Dispatch
- Hero 标签建议 3–7 个
- Hero 周围保留视觉缓冲
- Hero 与 Supporting Panels 必须发生信息关系

## Hero Library
### Railway Operation
Station Operation Twin — Station / Platform / Track / Equipment / Power / HVAC / Security / Passenger Flow / Dispatch

### Railway Energy
Station Energy Network Twin — Power / HVAC / Lighting / Cooling / Metering / Peak Load / Energy Flow / Anomaly

### Vehicle Energy
Vehicle Energy Ecosystem Twin — Fleet / Vehicle / Battery / Charging / Swap / Storage / Grid / Cloud Dispatch / Carbon

### Charging Network
Charging Network Operation Twin — Charging Station / Urban Network / Grid Load / Storage / Queue / Health / Demand

### Smart Factory
Production Operation Twin — Production Line / Equipment / Warehouse / Material Flow / Quality / Maintenance / Energy

### Hospital
Hospital Resource Twin — Building / Department / Bed / Staff / Equipment / Patient Flow / Emergency / Resource

### Airport
Airport Operation Twin — Terminal / Runway / Gate / Aircraft / Passenger / Baggage / Security / Dispatch

### Port
Smart Port Twin — Berth / Ship / Crane / Container / Truck / Warehouse / Logistics Flow

### Smart City
City Operation Twin / GIS — Traffic / Energy / Public Safety / Environment / Emergency / Infrastructure

## Hero Output
Hero Type / System Name / Core Assets / Infrastructure / Operational Flow / Status Layer / Relationship Layer / Camera / Hero Ratio / Labels

# Part 02 — Dashboard Grammar

## Definition
Dashboard 不是图表集合，而是业务运营故事。

## Dashboard Formula
Dashboard = System Hero + Primary KPI + Status + Analysis + Alert + Supporting Information

## Information Hierarchy
Level 01 — System Hero / Weight 100 / Count 1

Level 02 — Primary KPI / Weight 75–80 / Count 4–6

Level 03 — Critical Status / Weight 65–70 / Count 2–4

Level 04 — Business Analysis / Weight 45–55 / Count 3–5

Level 05 — Supporting Information / Weight 20–30 / Count 2–6

## Recommended Composition
Center Hero / Center-Left Hero / Editorial Layout / L-Shape / Split Hero / Panorama / Command Center / Digital Twin Layout

## Density
Executive Dashboard → Low
Operation Dashboard → Medium
Engineer Dashboard → High
Analysis Dashboard → High

## KPI Grammar
Large Numbers / Short Labels / Clear Units / Simple Delta / Semantic Color

## Chart Grammar
Preferred: Line / Area / Bar / Progress / Status Matrix / Timeline / Heatmap / Topology / Sankey / Forecast

## Alert Grammar
Critical → Major → Minor → Resolved. Visible alert count should remain concise.

## Map Grammar
Map is promoted only when location is a primary business variable. When a large System Hero exists, maps become secondary.

## Negative Space
Recommended visual breathing space: 15–20%.

## Reading Flow
Hero → Primary KPI → Status / Alert → Trend / Analysis → Supporting Information

## Output
Composition / Hero Ratio / Panel Count / KPI Count / Primary Charts / Alert Strategy / Map Strategy / Reading Flow / Density

# Part 03 — Art Direction Engine

## Definition
Art Direction 定义统一视觉语言，使 Digital Twin、Dashboard、Data Visualization 和 UI Surface 属于同一产品。

## Visual DNA Library
Engineering Precision — Structured / Technical / Precise / Rational
Premium Dark — Deep Navy / Graphite / Matte / Controlled Contrast
Enterprise Minimal — Clean / Quiet / Spacious / Functional
Data Luxury — Editorial / Large Hero / Strong Negative Space / Premium Typography
Analytical Dense — High Information Density / Compact / Operational

## Surface System
Background → Base Layer → Panel → Raised Layer → Interactive Layer

Primary Surface: Premium Matte
Secondary Surface: Micro Gradient
Border: Ultra Thin
Radius: Small Radius
Depth: Subtle Layering
Reflection: Low Reflection

## Material Library
Graphite Composite / Steel Gray / Technical Glass / Dark Acrylic / Soft Matte Polymer / Brushed Aluminum / Low-Gloss Metal

## Lighting System
Ambient + Primary Light + Fill + Soft Rim + Screen Emission + Ambient Occlusion

Characteristics: Controlled Brightness / Soft Shadow / Minimal Glow / Subtle Reflection

## Camera System
Primary: 30°–45° Bird View
Secondary: Isometric
Optional: Orthographic
Perspective: Slight Perspective

## Color System
Background: Deep Navy / Graphite
Primary: Cyan
Text: White / Cool Gray
Warning: Amber
Critical: Red
Normal: Green
Disabled: Gray

Industry Suggestions:
Railway → Deep Navy / Steel Gray / Cool Cyan
Energy → Deep Blue Gray / Teal / Clean Green / Cyan
Vehicle Energy → Deep Navy / Graphite / Electric Cyan / Teal / Green
Industrial → Graphite / Cold Gray / Cyan / Orange
Medical → Soft Blue Gray / Cool Blue / Teal

## Typography
Large KPI Numbers / Short English Labels / Technical Captions / Clear Section Titles / DIN-like Numerical Feeling
正式中文在 Figma / PS 中完成。

## Data Visualization
Line / Area / Bar / Status Matrix / Progress / Timeline / Heatmap / Topology / Sankey / Forecast

## Rendering
Enterprise Product / Digital Twin / Engineering Visualization / Behance Portfolio / Developer Ready / Figma Ready

## Output
Visual DNA / Surface Specification / Material Specification / Lighting Specification / Camera Specification / Color Specification / Typography Specification / Visualization Specification / Rendering Specification

# Part 04 — Visual Prompt Compiler

## Definition
Visual Prompt Compiler 将企业级设计规范转换为 AI 图像模型可理解的视觉描述。

## Prompt Workflow
Business Scene → System Hero → Dashboard Grammar → Visual DNA → Art Direction → Visual Description → Prompt Optimization → Rendering Prompt

## Prompt Structure
01 Scene
02 System Hero
03 Business Relationship
04 Dashboard Composition
05 Supporting Information
06 Visual DNA
07 Surface
08 Material
09 Lighting
10 Camera
11 Color
12 Typography Direction
13 Rendering
14 Quality

## Visual Translation
Engineering Precision → precise alignment, fine technical structure, controlled spacing, minimal decoration
Premium Dark → deep navy interface, graphite matte surfaces, low reflection, soft contrast
Enterprise Minimal → clean layout, thin borders, large spacing, low visual noise
Data Luxury → editorial composition, premium hierarchy, large hero, high-end product presentation
Analytical Dense → high information density, structured dashboard, technical labels, compact charts

## Surface Translation
premium matte interface / graphite surface / micro gradient / technical glass / soft layered panels / thin engineering border / low-gloss material

## Lighting Translation
controlled engineering lighting / soft ambient illumination / subtle rim lighting / localized screen emission / minimal glow / ambient occlusion / balanced contrast

## Camera Translation
35 degree bird view / slight perspective / architectural proportion / isometric feeling / orthographic influence

## Typography Translation
clean enterprise typography / large KPI numbers / short English labels / technical captions / clear hierarchy / editable text area

## Rendering Translation
premium enterprise dashboard / engineering visualization / digital twin presentation / high-end B2B product / Behance portfolio quality / pixel-precise composition

## Reference Visual Language
Primary Reference: Siemens
Secondary Reference: Palantir
Enterprise UI: IBM Carbon
Industrial Design: Apple
Surface Language: Nothing Design
Rendering: Cinema4D / Octane / Unreal
Layout: Behance Editorial
Typography: DIN / IBM Plex Sans

Reference language is used as design abstraction, not direct copying.

## Output
Visual Prompt / Rendering Prompt / Reference Language / Prompt Structure / Quality Description

# Part 05 — Quality Engine

## Definition
Quality Engine 用于验证企业级 Dashboard 的视觉一致性、业务表达和作品集完成度。

## Validation Areas
Business Expression / Hero Quality / Dashboard Identity / Visual Hierarchy / Surface Consistency / Color Consistency / Typography / Data Visualization / Portfolio Quality

## Quality Levels
### Level A — Enterprise Ready
Clear Business Logic / Strong Hero / Balanced Composition / Professional Surface / High Visual Consistency

### Level AA — Portfolio Ready
High-End Product Presentation / Excellent Hierarchy / Strong Editorial Layout / Premium Art Direction / Suitable for Behance

### Level AAA — Flagship Quality
International Enterprise Standard / Outstanding Hero / Memorable Composition / Refined Surface Language / Exceptional Portfolio Impact

## Global Library
Scene Library: Railway Operation Center / Vehicle Energy Operation Center / Charging Network Center / Industrial Operation Center / Hospital Operation Center / Airport Operation Center / Port Operation Center / Smart City IOC / Energy Dispatch Center / Executive Command Center

Hero Library: Station Operation Twin / Vehicle Energy Ecosystem / Charging Network Twin / Production Operation Twin / Hospital Resource Twin / Airport Operation Twin / Port Logistics Twin / City Operation Twin / Energy Network Twin

Visual DNA Library: Engineering Precision / Premium Dark / Enterprise Minimal / Data Luxury / Analytical Dense

Composition Library: Center Hero / Center Left Hero / Editorial Layout / L Shape / Panorama / Command Center / Digital Twin Layout

Surface Library: Premium Matte / Graphite Composite / Technical Glass / Dark Acrylic / Soft Matte Polymer / Low Reflection / Thin Border / Micro Gradient

Typography Library: DIN / IBM Plex Sans / Short English Labels / Large KPI Numbers / Technical Captions

## Final Output
Enterprise Scene / Business System Hero / Dashboard Grammar / Visual Language / Prompt Specification / Reference Language / Quality Report

# End of Enterprise Visual Director v3.1
