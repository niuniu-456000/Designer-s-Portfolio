---
name: enterprise-dashboard-design-system
display_name: 企业级数据大屏设计系统
version: 1.0
language: zh-CN
category: Figma / Enterprise UI / Dashboard Design System
description: >
  用于将 Enterprise Visual Director 输出的视觉策略落地为 Figma 可执行的企业级数据大屏设计系统。
  覆盖 Grid、Layout、Design Tokens、Color、Typography、Component、Chart、Hero、Auto Layout、Variables、Responsive、Export 与 Developer Handoff。
---

# Enterprise Dashboard Design System v1.0

> Visual Strategy → Design Tokens → Grid → Layout → Components → Charts → Hero → Figma → Handoff

# Part 00 — Design Principles

## Definition
本系统用于把企业级数据大屏视觉方向转化为可维护、可复用、可开发的 Figma 设计规范。

## Principles
- Visual Director 决定视觉方向
- Design System 决定落地方式
- Token Before Style
- Grid Before Layout
- Component Before Page
- Auto Layout Before Manual Positioning
- Reuse Before Rebuild
- PC 与 LED 共用 Design DNA，不共用固定尺寸
- Hero 与 UI 分层
- 正式文字必须可编辑

## Output
Token Set / Grid Specification / Layout Blueprint / Component Library / Chart Library / Hero Specification / Figma Structure / Developer Handoff

# Part 01 — Design Tokens

## Color Tokens
color.bg.base
color.bg.surface
color.bg.raised
color.bg.overlay
color.border.default
color.border.active
color.border.warning
color.text.primary
color.text.secondary
color.text.muted
color.primary
color.secondary
color.info
color.success
color.warning
color.danger
color.disabled
chart.series.01–05
chart.axis
chart.grid
chart.tooltip

## Recommended Dark Theme
color.bg.base = #060D18
color.bg.surface = #0C1A2E
color.bg.raised = #10243C
color.border.default = #162840
color.text.primary = #E8F2FF
color.text.secondary = #6A8BAE
color.primary = #00E5C8
color.warning = #F5A623
color.danger = #FF3B3B
color.success = #00C853

## Spacing Tokens
4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80

## Radius Tokens
small 4 / card 8 / panel 10 / modal 12

## Border Tokens
default 1 / active 1 / alert 2

## Typography Tokens
type.h1 / type.h2 / type.section / type.body / type.caption / type.kpi.lg / type.kpi.md / type.number.mono

# Part 02 — Grid System

## PC Grid
Canvas: 1920 × 1080
Columns: 24
Outer Margin: 32–48px
Gutter: 16–24px
Baseline: 8px

## LED Grid
Canvas: 3840 × 2160 or project native resolution
Columns: 24
Spacing: scaled from PC tokens
Safe Area: account for screen seams and viewing distance

## Ultra-Wide
Use horizontal narrative grid. Do not stretch a 16:9 layout.

## Figma Setup
Layout Grid: 24 columns / Stretch / Margin 40 / Gutter 20

# Part 03 — Layout System

## Dashboard Regions
Top Header
Left Information Zone
System Hero Zone
Right Analysis Zone
Bottom Alert / Status Zone

## Recommended Ratio
Hero 35–45%
KPI 10–15%
Analysis 20–25%
Status / Alert 10–15%
Supporting 10–15%

## Layout Types
Center Hero / Left Hero / Right Hero / Split Hero / L Shape / Panorama / Editorial / GIS / Flow

## Layout Rules
- Major modules align to Grid
- Hero may cross columns but follows primary alignment axes
- Supporting cards use consistent spacing
- Negative space is intentional
- Same-row cards share baseline
- Module grouping uses larger gap than internal grouping

# Part 04 — Typography

## Recommended Fonts
Chinese: Source Han Sans SC / MiSans / HarmonyOS Sans SC
English / Number: Inter / IBM Plex Sans / DIN-style numerals / IBM Plex Mono

## PC Scale
Page Title 28–36
Section Title 18–22
Body 14–16
Caption 12–14
KPI Large 40–72

## LED Scale
Page Title 36–56
Body 18–26
KPI Large 56–104

## Rules
- Max 2 font families
- Number and unit form a fixed pattern
- Keep labels short
- Avoid thin weights on LED
- Replace AI-generated text in Figma

# Part 05 — Component Library

## Core Components
Global Header
Top Navigation
Side Navigation
KPI Card
Status Card
Alarm Item
Work Order Item
Chart Panel
Data Table
Ranking List
Progress
Timeline
Filter
Tab
Dropdown
Search
Tooltip
Modal
Empty State
Loading State
Error State
Digital Twin Label

## Component Anatomy
Usage / Anatomy / Size / Padding / State / Token / Variant / Interaction

## KPI Card
Label / Value / Unit / Delta / Optional Sparkline / Status
Recommended H: 96–120 / Padding: 16–24 / Radius: 8

## Status Card
Status Name / Status Value / Status Indicator / Optional Detail

## Alarm Item
Severity / Title / Location / Time / Status

## Chart Panel
Title / Filter or Legend / Chart Area / Optional KPI / Footer or Unit

## Table
Header / Rows / Status / Pagination or Virtual List

# Part 06 — Chart Library

## Mapping
Trend → Line
Comparison → Bar
Distribution → Donut / Stacked Bar
Progress → Progress
Relationship → Topology
Flow → Sankey
Location → GIS
Prediction → Forecast
Event → Timeline

## Chart Style
Axis low contrast
Grid subtle
Primary Stroke 2px
Secondary Stroke 1–1.5px
Series limited
Tooltip uses panel surface language
Legend position consistent

## Chart Rules
- Meaningful unit
- Clear time range
- Avoid 3D charts
- Avoid decorative curves
- Avoid excessive pie charts
- Keep main series count low

# Part 07 — Hero & Digital Twin

## Definition
Hero 由 Visual Director 供应，并以独立 Figma 图层落地。

## Hero Layers
Hero_Background
Hero_Model
Hero_Flow
Hero_Status
Hero_Labels
Hero_Effects
Hero_Mask

## Rules
- Hero independent from UI cards
- Labels remain editable
- Status overlays use semantic color
- Model and effects separated
- Export Hero as transparent PNG when external 3D is used
- Preserve visual breathing area around core focal point

## Hero Sources
AI Render / Spline / Cinema4D / Blender / SVG / Isometric Illustration / Figma Geometry

# Part 08 — Auto Layout

## Page Structure
Dashboard Frame → Header → Main Content → Bottom Status

## Main Content
Horizontal Auto Layout
Left Zone / Hero Zone / Right Zone
Gap 16–24

## Card
Vertical Auto Layout
Padding 16–24
Gap 8–16

## KPI Group
Horizontal Auto Layout
Gap 16

## Responsive Principle
Fixed: Design DNA / Tokens / Component Anatomy
Adaptive: Width / Height / Density / Text Scale / Hero Ratio / Chart Detail

# Part 09 — Figma Variables

## Variable Collections
Color
Spacing
Radius
Typography
Opacity
Component
Chart
Device Scale

## Example
Collection: Theme
Mode: Dark
Variables: color.bg.base / color.bg.surface / color.primary / color.warning / color.danger

Collection: Device
Modes: PC / LED
Variables: scale.type / scale.spacing / scale.icon

# Part 10 — Layer Structure

01_Background
02_Grid
03_Base_Surface
04_Header
05_Navigation
06_Hero_Model
07_Hero_Labels
08_Panels
09_KPI
10_Charts
11_Tables
12_Status
13_Icons
14_Decoration
15_Effects
16_Overlay
17_Mask
18_Text
19_Annotations

## Rules
- Text editable
- Effects separate
- Hero model and labels separate
- Chart background and data layers separate
- Naming consistent

# Part 11 — Dashboard Templates

## Railway Operation
Hero: Station Operation Twin
Left: Equipment Health / KPI / Inspection
Right: Alarm / Work Order / Trend
Bottom: Fault Trend / Status

## Vehicle Energy
Hero: Vehicle Energy Ecosystem Twin
Left: Fleet KPI / Battery Health / Charging
Right: Energy Flow / Grid Load / Carbon / Trend
Bottom: Alert / Charging Station Status

## Energy
Hero: Energy Flow Twin
Left: Consumption KPI / Peak Load
Right: Distribution / Forecast / Anomaly
Bottom: Energy Trend / Alert

## Industrial
Hero: Production Operation Twin
Left: OEE / Production / Equipment
Right: Quality / Alarm / Energy
Bottom: Trend / Work Order

# Part 12 — Figma Free Version Workflow

## Step 01
Create a new Design File and main frame: 1920 × 1080.
Name: Dashboard / Main

## Step 02
Create local variables: Color / Spacing / Radius / Typography.
If a feature is unavailable in the current free plan, use component styles and naming tokens as fallback.

## Step 03
Create Components page.
Build KPI Card / Chart Panel / Status Card / Alarm Item / Header / Navigation.

## Step 04
Create Templates page.
Add PC Template / LED Template / Hero Template / Chart Template.

## Step 05
Insert Hero using transparent PNG / SVG / Spline render and keep Hero in an independent group.

## Step 06
Build dashboard using Auto Layout and Grid.

## Step 07
Replace AI text with real editable text.

## Step 08
Export PNG for presentation, SVG for icons, PDF for portfolio, and handoff assets as needed.

# Part 13 — Export Specification

PNG: Hero Render / Presentation / Mockup
SVG: Icons / Simple Charts / Lines / Decorative Geometry
PDF: Portfolio / Review / Presentation

Naming:
Dashboard_Main
Dashboard_Header
Dashboard_KPI_01
Dashboard_Chart_Load
Dashboard_Hero
Dashboard_Alert

# Part 14 — Developer Handoff

## Required
Canvas / Grid / Tokens / Components / Variants / States / Responsive Rules / Chart Mapping / Asset Export / Interaction Notes

## Suggested Component Names
Dashboard/Header
Dashboard/Navigation
Dashboard/KPI
Dashboard/Panel
Dashboard/Chart
Dashboard/Table
Dashboard/Twin
Dashboard/Alarm
Dashboard/WorkOrder

## Implementation Mapping
Figma Variables → CSS Variables / Design Tokens
Auto Layout → Flex / Grid
Components → React Components
Variants → Component Props
Semantic Colors → Status Tokens

# Part 15 — Validation

## Visual
Hero clear
Hierarchy clear
Negative space exists
Panels support Hero

## System
Tokens reused
Grid consistent
Components reusable
Typography unified

## Figma
Auto Layout used
Text editable
Layers named
Hero separated
Charts replaceable

## Handoff
Developer can identify spacing / color / type / component / state / asset

# End of Enterprise Dashboard Design System v1.0
