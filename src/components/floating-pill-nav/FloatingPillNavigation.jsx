"use client";
// Pill-shaped navigation with animated background that shifts between links on click
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{motion}from"framer-motion";import{useState,startTransition,useEffect,useRef}from"react";
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// Standalone React / Next.js Shims (Decoupled from proprietary Framer runtime)
// ---------------------------------------------------------------------------
const framerPropsToStrip = [
  "__perspectiveFX", "__smartComponentFX", "__targetOpacity", "layoutDependency",
  "layoutId", "__fromCanvasComponent", "verticalAlignment", "withExternalLayout",
  "motionChild", "nodeId", "openInNewTab", "scopeId", "smoothScroll", "optimized",
  "rendersWithMotion", "isAuthoredByUser", "isModuleExternal", "fonts", "text",
  "explicitInter", "componentViewport", "relValues", "requiresOverflowVisible",
  "background", "animated", "breakpoint", "defaultVariant", "gestureVariant",
  "variants", "variant", "layout", "whileHover", "whileTap", "whileFocus",
  "whileDrag", "whileInView", "onAnimationStart", "onAnimationComplete"
];
const cleanFramerProps = (props) => {
  if (!props || typeof props !== "object") return props;
  const clean = { ...props };
  for (let i = 0; i < framerPropsToStrip.length; i++) {
    delete clean[framerPropsToStrip[i]];
  }
  return clean;
};
const useIsStaticRenderer = () => false;
const addPropertyControls = () => {};
const getPropertyControls = () => ({});
const ControlType = {
  Number: "Number",
  Boolean: "Boolean",
  String: "String",
  Color: "Color",
  Enum: "Enum",
  Array: "Array",
  Object: "Object",
  ResponsiveImage: "ResponsiveImage",
  Transition: "Transition",
  Font: "Font",
  Link: "Link",
  EventHandler: "EventHandler",
  ChangeHandler: "ChangeHandler",
  VectorSetItem: "VectorSetItem",
  SegmentedEnum: "SegmentedEnum",
  CustomCursor: "CustomCursor",
};
const addFonts = () => {};
const getFonts = () => [];
const getFontsFromSharedStyle = (fonts) => fonts || [];
const Font = {};
const cx = (...args) => args.flat().filter(Boolean).join(" ");
const withFX = (Comp) => Comp;
const withOptimizedAppearEffect = (Comp) => Comp;
const useLocaleInfo = () => ({ locale: "en-US", direction: "ltr" });
const useLocaleCode = () => "en-US";
const fontStore = { loadFonts: () => {} };
const ComponentViewportProvider = ({ children }) => children || null;
const useComponentViewport = () => ({ width: 1200, height: 800, y: 0 });
const RenderTarget = { current: () => 1, canvas: 0 };
const RichText = ({ text, children, ...props }) => (
  <div {...cleanFramerProps(props)}>{children || text}</div>
);
const Link = ({ href = "#", children, ...props }) => {
  const cleanProps = cleanFramerProps(props);
  if (props.motionChild) return children;
  return <a href={href} {...cleanProps}>{children}</a>;
};
const withCSS = (Comp, css, hash) => {
  const Wrapped = (props) => {
    const cssString = Array.isArray(css) ? css.join("\n") : css;
    return (
      <div style={{ display: "contents" }}>
        {cssString ? <style dangerouslySetInnerHTML={{ __html: cssString }} /> : null}
        <Comp {...props} />
      </div>
    );
  };
  Wrapped.displayName = Comp.displayName || "FramerComponent";
  return Wrapped;
};
const patchBorderRadiusScaleCorrector = () => {};
const useIsOnFramerCanvas = () => false;
const useOverlayState = () => [false, () => {}];
const useVariantState = (props) => ({
  baseVariant: props?.defaultVariant || "",
  classNames: "",
  clearLoadingGesture: () => {},
  gestureHandlers: {},
  gestureVariant: "",
  isLoading: false,
  setGestureState: () => {},
  setVariant: () => {},
  variants: [props?.defaultVariant || ""],
});
const getLoadingLazyAtYPosition = () => "lazy";
const Floating = ({ children }) => children || null;
const forwardLoader = (fn) => fn;
const runTasksWithYield = (tasks) => Promise.allSettled((tasks || []).map((t) => typeof t === "function" ? t() : t));
const useCustomCursors = () => {};
const useHydratedBreakpointVariants = (variant) => [variant, variant];
const useMetadata = () => {};
const GeneratedComponentContext = { Provider: ({ children }) => children };
const Container = ({ children, ...props }) => <div {...cleanFramerProps(props)}>{children}</div>;
const SmartComponentScopedContainer = ({ children, ...props }) => <div {...cleanFramerProps(props)}>{children}</div>;
const useActiveVariantCallback = (baseVariant) => ({ activeVariantCallback: (cb) => cb || (() => {}), delay: 0 });
const defineShader = () => (props) => <div {...cleanFramerProps(props)} />;
const registeredSvgTemplates = typeof Set !== "undefined" ? new Set() : null;
const useSVGTemplate = (id, svg) => {
  const symbolId = "framer-svg-" + id;
  if (typeof svg === "string") {
    if (svg.startsWith("#")) return svg;
    if (typeof document !== "undefined") {
      if (registeredSvgTemplates && !registeredSvgTemplates.has(symbolId)) {
        registeredSvgTemplates.add(symbolId);
        try {
          let container = document.getElementById("__framer_svg_symbols");
          if (!container) {
            container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            container.setAttribute("id", "__framer_svg_symbols");
            container.setAttribute("style", "display:none;position:absolute;width:0;height:0;overflow:hidden;");
            document.body.appendChild(container);
          }
          if (!document.getElementById(symbolId)) {
            const vbMatch = svg.match(/viewBox=["']([^"']+)["']/i);
            const viewBox = vbMatch ? vbMatch[1] : "0 0 24 24";
            const inner = svg.replace(/^<svg[^>]*>/i, "").replace(/<\/svg>$/i, "");
            const symbol = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
            symbol.setAttribute("id", symbolId);
            symbol.setAttribute("viewBox", viewBox);
            symbol.innerHTML = inner;
            container.appendChild(symbol);
          }
        } catch (e) {}
      }
    }
  }
  return "#" + symbolId;
};
const SVG = ({ svg, children, className, style, ...props }) => {
  const cleanProps = cleanFramerProps(props);
  if (svg) {
    return (
      <div
        className={className}
        style={{ display: "inline-block", position: "relative", ...style }}
        {...cleanProps}
      >
        <span dangerouslySetInnerHTML={{ __html: svg }} style={{ display: "contents" }} />
        {children}
      </div>
    );
  }
  return <svg className={className} style={style} {...cleanProps}>{children}</svg>;
};
const Shader = ({ fallbackImage, style, className, id, width = "100%", height = "100%" }) => (
  <div
    className={className}
    id={id}
    style={{
      width,
      height,
      backgroundImage: fallbackImage ? `url(${fallbackImage})` : undefined,
      backgroundSize: "cover",
      backgroundPosition: "center",
      ...style,
    }}
  />
);
const Image = ({ src, alt = "", style, className, background, ...props }) => {
  const cleanProps = cleanFramerProps(props);
  const imgSrc =
    (typeof src === "string" ? src : src?.src) ||
    (typeof background === "string" ? background : background?.src) ||
    "";
  return (
    <img
      src={imgSrc}
      alt={alt}
      style={{ objectFit: "cover", width: "100%", height: "100%", ...style }}
      className={className}
      {...cleanProps}
    />
  );
};
const Image1 = Image;

/**
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */export default function FloatingPillNavigation(props){const{items,backgroundColor,textColor,activeBackgroundColor,activeTextColor,padding,gap,font,activeLink="Home",transition,linkPadding,onNavigate}=props;// Internal state for interactive clicking
const[internalActiveLink,setInternalActiveLink]=useState(activeLink);const navRef=useRef(null);const linkRef=useRef(null);const[navBorderRadius,setNavBorderRadius]=useState(50);const[linkBorderRadius,setLinkBorderRadius]=useState(25);// Sync internal state when activeLink prop changes
useEffect(()=>{startTransition(()=>{setInternalActiveLink(activeLink);});},[activeLink]);// Calculate border radii based on heights
useEffect(()=>{const updateBorderRadii=()=>{if(navRef.current){const navHeight=navRef.current.offsetHeight;setNavBorderRadius(navHeight/2);}if(linkRef.current){const linkHeight=linkRef.current.offsetHeight;setLinkBorderRadius(linkHeight/2);}};updateBorderRadii();// Use ResizeObserver to update when size changes
const resizeObserver=new ResizeObserver(updateBorderRadii);if(navRef.current)resizeObserver.observe(navRef.current);if(linkRef.current)resizeObserver.observe(linkRef.current);return()=>resizeObserver.disconnect();},[linkPadding,font,items]);const handleClick=(label,href,target)=>{startTransition(()=>{setInternalActiveLink(label);});if(typeof onNavigate==="function"){onNavigate(label,href);}// Navigate if href is provided
if(href&&typeof window!=="undefined"){// Smooth scroll for hash links
if(href.startsWith("#")){const targetEl=href==="#"||href==="#top"?null:document.querySelector(href);if(targetEl){targetEl.scrollIntoView({behavior:"smooth"});}else{window.scrollTo({top:0,behavior:"smooth"});}return;}let finalHref=href;if(!href.match(/^(https?:\/\/|mailto:|tel:|#|\/)/)){finalHref=`https://${href}`;}if(target==="_blank"){window.open(finalHref,"_blank");}else{window.location.href=finalHref;}}};return /*#__PURE__*/_jsx("nav",{ref:navRef,style:{display:"inline-flex",backgroundColor,borderRadius:navBorderRadius,padding,gap,position:"relative",width:"max-content",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none"},children:items.map((item,index)=>{const isActive=item.label===internalActiveLink;return /*#__PURE__*/_jsxs("div",{ref:index===0?linkRef:null,onClick:()=>handleClick(item.label,item.href,item.target),style:{position:"relative",padding:linkPadding,textDecoration:"none",color:isActive?activeTextColor:textColor,cursor:"pointer",zIndex:1,transition:"color 0.3s ease",userSelect:"none",WebkitUserSelect:"none",MozUserSelect:"none",...font},children:[isActive&&/*#__PURE__*/_jsx(motion.div,{layoutId:"activeBackground",style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:activeBackgroundColor,borderRadius:linkBorderRadius,zIndex:-1},transition:transition}),item.label]},index);})});}addPropertyControls(FloatingPillNavigation,{activeLink:{type:ControlType.String,title:"Active Link",defaultValue:"All products",description:"Enter the label of the link you want to be active initially"},transition:{type:ControlType.Transition,title:"Transition",defaultValue:{type:"spring",stiffness:800,damping:60,mass:1}},linkPadding:{type:ControlType.Padding,title:"Link Padding",defaultValue:"12px 22px 12px 22px"},items:{type:ControlType.Array,control:{type:ControlType.Object,controls:{label:{type:ControlType.String,defaultValue:"Link"},href:{type:ControlType.String,title:"Link To",placeholder:"/page or #section",description:"Optional: Link to a page or section"},target:{type:ControlType.Enum,title:"Open In",options:["_self","_blank"],optionTitles:["Same Tab","New Tab"],defaultValue:"_self",hidden:props=>!props.href}}},defaultValue:[{label:"All products"},{label:"Laptops"},{label:"Desktops"},{label:"Displays"}]},backgroundColor:{type:ControlType.Color,defaultValue:"#E8E8ED"},textColor:{type:ControlType.Color,defaultValue:"#000000",title:"Inactive Text"},activeBackgroundColor:{type:ControlType.Color,defaultValue:"#1D1D1F",title:"Active BG"},activeTextColor:{type:ControlType.Color,defaultValue:"#FFFFFF",title:"Active Text"},padding:{type:ControlType.Number,defaultValue:6,min:0,max:20,step:1,unit:"px"},gap:{type:ControlType.Number,defaultValue:0,min:0,max:20,step:1,unit:"px"},font:{type:ControlType.Font,controls:"extended",defaultFontType:"sans-serif",defaultValue:{fontSize:"17px",variant:"Regular",letterSpacing:"-0.37px",lineHeight:"20px"}}});FloatingPillNavigation.displayName="Floating Pill Navigation";
// {"exports":{"default":{"type":"reactComponent","name":"FloatingPillNavigation","slots":[],"annotations":{"framerSupportedLayoutWidth":"auto","framerContractVersion":"1","framerSupportedLayoutHeight":"auto"}},"__FramerMetadata__":{"type":"variable"}}}
