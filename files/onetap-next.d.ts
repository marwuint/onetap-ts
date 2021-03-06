export { };

declare global {
  /**
   * @tutorial https://www.onetap.com/resources/categories/globals.2/
   */
  namespace Globals {
    /**
     * Returns amount of choked commands
     */
    function ChokedCommands(): number;

    /**
     * Returns time in seconds since CS:GO was started
     */
    function RealTime(): number;

    /**
     * Returns time in seconds it took to render the frame
     */
    function Frametime(): number;

    /**
     * Returns the game/match time in seconds
     */
    function Curtime(): number;

    /**
     * Returns the time elapsed in one game tick in seconds
     */
    function TickInterval(): number;

    /**
     * Returns server tick settings
     */
    function Tickrate(): number;

    /**
     * Returns amount of ticks elapsed on the server
     */
    function Tickcount(): number;

    /**
     * Returns an integer value of frame stage.
     */
    function FrameStage(): FrameStage;
  }
  /**
   * @tutorial https://www.onetap.com/scripting/categories/ui.5/
   */
  namespace UI {
    /**
     *  Used to update dropdowns/multidropdowns.
     *  @param path path to the dropdown
     *  @param items new item array
     */
    function UpdateList(path: Array<string>, items: Array<string>): void;

    /**
     * Used to delete items made by scripts.
     * @param path path to the UI item
     */
    function RemoveItem(path: Array<string>): void;
    /**
     * Used to get button/key of key picker.
     * @param path path to the KeyPicker
     * @returns VKey code
     */
    function GetHotkey(path: Array<string>): number;

    function SetHotkeyState(path: Array<string>, state: hotkeyState): void;

    function GetHotkeyState(path: Array<string>): hotkeyState;

    function ToggleHotkey(path: Array<string>): void;

    function SetColor(path: Array<String>, color: Color);

    function AddSubtab(path: Array<string>, name: string);

    function AddTextBox(path: Array<string>, name: string);

    function AddColorPicker(path: Array<string>, name: string);

    function AddHotkey(path: Array<string>, name: string, shortName?: string);

    function AddMultiDropdown(
      path: Array<string>,
      name: string,
      items: Array<string>
    );

    function AddDropdown(
      path: Array<string>,
      name: string,
      items: Array<string>,
      searchable: boolean
    );

    function AddSliderFloat(
      path: Array<string>,
      name: string,
      min: number,
      max: number
    );

    function AddSliderInt(
      path: Array<string>,
      name: string,
      min: number,
      max: number
    );

    function AddCheckbox(path: Array<string>, name: string);

    function SetValue(path: Array<string>, val: string);

    function GetChildren(path: Array<string>): Array<string>;

    function GetValue(path: Array<string>): any;

    function GetString(path: Array<string>): string;

    function GetColor(path: Array<string>): Color;

    function IsMenuOpen(): boolean;

    function SetEnabled(path: Array<string>): void;
  }
  /**
   * @tutorial https://www.onetap.com/resources/categories/entity.3/
   */
  namespace Entity {
    /**
     * Returns a string that is the player name.
     * @returns {string} -player name
     */
    function GetName(e: EntityIndex): string;

    /**
     * Returns an array object with state (valid/invalid), min X, min Y, max X, max Y
     * @tutorial https://www.onetap.com/resources/getrenderbox.161/
     */
    function GetRenderBox(
      entityIndex: EntityIndex
    ): [boolean, number, number, number, number]; // #TODO key mapping to index

    /**
     * Returns an array of weapons of the entity
     */
    function GetWeapons(entityIndex: EntityIndex): string[]; // #TODO weapons type?enum

    /**
     * weapon index of entity index passed as argument
     */
    function GetWeapon(entityIndex: EntityIndex): string;

    /**
     * Returns an array object with X, Y, Z for hitbox position
     * @returns [x, y, z] for hitbox position
     */
    function GetHitboxPosition(
      entityIndex: EntityIndex,
      hitboxIndex: HitboxIndex
    ): [number, number, number];

    /**
     * Returns an array object with X, Y, Z for eye position
     * @returns [x, y, z]
     */
    function GetEyePosition(entityIndex: EntityIndex): [number, number, number];

    /**
     * Returns entity index of game rules entity
     */
    function GetGameRulesProxy(): EntityIndex; // Returns entity index of game rules entity

    /**
     * Returns the value of the property
     * @tutorial https://www.onetap.com/resources/getprop.32/
     */
    function GetProp(
      entityIndex: EntityIndex,
      table: string,
      prop: string
    ): any; // #TODO need to know return type string/number

    /**
     * Can be used to override property values.
     * @abstract Set value of property
     * @tutorial https://www.onetap.com/resources/setprop.33/
     */
    function SetProp(
      entityIndex: EntityIndex,
      table: string,
      prop: string,
      value: any
    ): void;

    /**
     * @returns [ x, y, z ]
     * @tutorial https://www.onetap.com/resources/getrenderorigin.31/
     */
    function GetRenderOrigin(
      entityIndex: EntityIndex
    ): [number, number, number];

    /**
     * Returns a string that represents the class name instead of the class ID
     * @tutorial https://www.onetap.com/resources/getclassname.29/
     */
    function GetClassName(entityIndex: EntityIndex): string;

    /**
     * Returns a number that is the class ID, lists of class IDs can be found {@link https://www.onetap.com/resources/class-ids.67/| HERE}
     * @example
     * const entities = Entity.GetEntities();
     *  for (const entity of entities ) {
     *      cID = Entity.GetClassID(entity);
     *      Cheat.Print("Entity class ID: " + cID + "\n");
     *  }
     */
    function GetClassID(entityIndex: EntityIndex): ClassId;

    /**
     * Returns entities of given Class ID
     * @tutorial https://www.onetap.com/resources/getentitiesbyclassid.87/
     */
    function GetEntitiesByClassID(classId: ClassId): Array<EntityIndex>;

    /**
     * Finds out whether an entity is dormant.
     * @param entityIndex
     */
    function IsDormant(entityIndex: EntityIndex): boolean; // read IsTeammate note

    /**
     * Finds out whether an entity is alive.
     */
    function IsAlive(entityIndex: EntityIndex): boolean;

    /**
     * Finds out whether an entity is valid.
     */
    function IsValid(entityIndex: EntityIndex): boolean;

    /**
     * Finds out whether an entity is the local player.
     */
    function IsLocalPlayer(entityIndex: EntityIndex): boolean;

    /**
     * Finds out whether an entity is an enemy.
     */
    function IsEnemy(entityIndex: EntityIndex): boolean;

    /**
     * Finds out whether an entity is a teammate.
     */
    function IsTeammate(entityIndex: EntityIndex): boolean;

    /**
     * Returns true or false.
     */
    function IsBot(entityIndex: EntityIndex): boolean;

    /**
     * Returns an array of entity indexes.
     */
    function GetEntities(): Array<EntityIndex>;

    /**
     * Finds the entity of the given user id.
     */
    function GetEntityFromUserID(userId: string): EntityIndex;

    /**
     * Returns the entity index of local the player.
     */
    function GetLocalPlayer(): EntityIndex;

    /**
     * Returns an array of player entity indexes.
     */
    function GetPlayers(): Array<EntityIndex>;

    /**
     * Returns an array of teammate entity indexes.
     */
    function GetTeammates(): Array<EntityIndex>;

    /**
     * Returns an array of enemy entity indexes.
     */
    function GetEnemies(): Array<EntityIndex>;

    function GetWeapon(entity: EntityIndex): any;

    function GetRenderBox(entity: EntityIndex): RenderBox;

    function GetCCSWeaponInfo(entity: EntityIndex): WeaponInfo;
  }
  /**
   * @tutorial https://www.onetap.com/resources/categories/convar.6/
   */
  namespace Convar {
    /**
     * Sets the string value of the given console command.
     * @returns true on success or false on failure.
     * @example Convar.SetString ("r_aspectratio", "1");
     */
    function SetString(cmd: string, str: string): boolean;

    /**
     * Finds the string value of the given console command.
     * @returns the value of the parameter or false.
     * @example const name = Convar.GetString("name");
     */
    function GetString(cmd: string): string | false;

    /**
     * Sets the float value of the given console command.
     * @returns true on success or false on failure.
     * @example Convar.SetFloat("cl_ragdoll_gravity", 100.00);
     */
    function SetFloat(cmd: string, float: number): boolean;

    /**
     * Finds the float value of the given console command.
     * @returns the value of the parameter or false.
     * @example const sv_gravity_value = Convar.GetFloat("cl_ragdoll_gravity");
     */
    function GetFloat(cmd: string): number | false;

    /**
     * Sets the integer value of the given console command.
     * @returns true on success or false on failure.
     * @example Convar.SetInt("cl_ragdoll_gravity", 100);
     */
    function SetInt(cmd: string, value: number): boolean;

    /**
     * Finds the integer value of the given console command.
     * @returns the value of the parameter or false.
     * @example const sv_gravity_value = Convar.GetInt("cl_ragdoll_gravity");
     * Cheat.Print(sv_gravity_value);
     */
    function GetInt(cmd: string): number | false;
  }
  namespace Render {
    function FilledCircle(x: number, y: number, r: number, color: Color): boolean;
    function TexturedRect(x: number, y: number, width: number, height: number, texture: any): boolean;
    //TODO return type
    function AddTexture(path: string): any;
    //TODO return type
    function FindFont(name: string, size: number, weight: number): any;
    //TODO return type
    function AddFont(name: string, size: number, weight: number): font;
    function Polygon(data: [[number, number], [number, number], [number, number]], color: Color): boolean;
    function GradientRect(x: number, y: number, w: number, h: number, dir: number, color1: Color, color2: Color): boolean;
    //TODO type of TextSize()[0]
    function TextSize(text: string, font: font): [number, number];
    function GetScreenSize(): [number, number];
    function WorldToScreen(point: [number, number, number]): [number, number];
    function Circle(x: number, y: number, r: number, color: Color): boolean;
    function FilledRect(x: number, y: number, width: number, height: number, color: Color): boolean;
    function Rect(x: number, y: number, width: number, height: number, color: Color): boolean;
    function Line(x: number, y: number, x1: number, y1: number, color: Color): boolean;
    function String(x: number, y: number, centered: boolean, text: string, color: Color, font: font): void
  }
  /**
   * #TODO
   */
  namespace Event {
    /**
     * Finds the string value of the given game event
     * @returns the value of the parameter or false
     * @tutorial https://www.onetap.com/resources/getstring.62/
     */
    function GetString(str: string): string | false;

    /**
     * Finds the float value of the given game event
     * @returns the value of the parameter or false
     * @tutorial https://www.onetap.com/resources/getfloat.61/
     * @example pos_x = Event.GetFloat("x");
     */
    function GetFloat(floatName: string): number | false;

    /**
     * Finds the integer value of the given game event.
     * @returns the value of the parameter or false.
     * @tutorial https://www.onetap.com/resources/getint.60/
     * @example userid = Event.GetInt("userid");
     */
    function GetInt(intName: string): number | false
  }
  /**
   * @tutorial https://www.onetap.com/resources/categories/trace.9/
   */
  namespace Trace {
    /**
     * Used for advanced line tracing.
     * Returns entity index and number fraction.
     * @tutorial https://www.onetap.com/resources/rawline.187/
     */
    function RawLine(skipIndex: EntityIndex | 0, startVec3: [number, number, number], endVec3: [number, number, number], mask: number, type: number): [EntityIndex, number];

    /**
     * Used to check if smoke is between two points.
     * @returns 1 if there was smoke.
     * @tutorial https://www.onetap.com/resources/smoke.179/
     * #TODO
     */
    function Smoke(start: [number, number, number], end: [number, number, number]): 1 | null;

    /**
     * Used to trace bullet between two entities.
     * @returns entity index, damage, visibility, and hitbox
     * @tutorial https://www.onetap.com/resources/bullet.79/
     * #TODO
     */
    function Bullet(entityIndex: EntityIndex, target: EntityIndex, start: [number, number, number], end: [number, number, number]): [EntityIndex, number, number, HitboxIndex];

    /**
     * Used to trace line between point A and B.
     * Fraction info: 1.0 means it didnt hit anything, 0.5 means it hit something half way through, 0.1 is hit
     * Returns entity index and number fraction.
     */
    function Line(entityIndex: EntityIndex, start: [number, number, number], end: [number, number, number]): [EntityIndex, number];
  }
  /**
    * #TODO Missing docs/types
    * Note: UserCMD functions can only be called from CreateMove callback.
    * @tutorial https://www.onetap.com/resources/categories/usercmd.10/ 
    */
  namespace UserCMD {

    /**
     * Used to obtain movement values
     * @returns an array object with forward move, side move, and up move - [ y, x, z ]
     * @tutorial https://www.onetap.com/resources/getmovement.186/
     */
    function GetMovement(): [number, number, number];

    /**
     * Control user angles.
     */
    function SetViewAngles(angles: [number, number, number], silent: boolean): void;

    /**
     * #TODO Add docs\n
     * Used to send commands.
     * @tutorial https://www.onetap.com/resources/send.184/
     */
    function Send(): void;

    /**
     * #TODO Add docs\n
     * Used to choke commands.
     * @tutorial https://www.onetap.com/resources/choke.183/
     */
    function Choke(): void;

    /**
     * Used to get buttons
     * @returns buttons
     * @tutorial https://www.onetap.com/resources/getbuttons.181/
     */
    function GetButtons(): any;

    /**
     * Used to set buttons
     * @param buttons
     * @tutorial https://www.onetap.com/resources/setbuttons.182/
     */
    function SetButtons(buttons: any): void;

    /**
     * Control user movement
     * @param m [ forwardmove, sidemove, upmove ]
     * @tutorial https://www.onetap.com/resources/setmovement.89/
     */
    function SetMovement(m: [number, number, number]): void;

  }
  /**
   * @tutorial https://www.onetap.com/resources/categories/sound.11/
   */
  namespace Sound {
    /**
     * Plays a sound
     * @param soundFilePath
     * @tutorial https://www.onetap.com/resources/play.82/
     */
    function Play(soundFilePath: string): void;

    /**
     * Plays a sound on microphone.
     * @param soundFilePath - absolute file path
     */
    function PlayMicrophone(soundFilePath: string): void;

    /**
     * Used to stop Sound.PlayMicrophone
     */
    function StopMicrophone(): void;

  }
  namespace Local {
    /**
     * @returns local player ping to the server
     * @example
     * const myPing = Local.Latency(); 
     * Cheat.Print("Your ping is : " + myPing);
     */
    function Latency(): number;

    /**
     * Returns inaccuracy
     */
    function GetInaccuracy(): number;

    /**
     * Returns spread.
     */
    function GetSpread(): number;

    /**
     * Returns fake yaw angle.
     * #TODO make sure
     */
    function GetFakeYaw(): number;

    /**
     * Returns real yaw angle.
     */
    function GetRealYaw(): number;

    /**
     * Used to set clan tag.
     * @example Local.SetClanTag("onetap.su");
     */
    function SetClanTag(clantag: string): void;

    /**
     * Returns array object with pitch, yaw and roll of your local view.
     * @returns [ pitch, yaw, roll ]
     */
    function GetViewAngles(): [number, number, number];

    /**
     * Sets user-defined view angles.
     * @param angles - [ pitch, yaw, roll ]
     */
    function SetViewAngles(angles: [number, number, number]): void;
  }
  /**
    * @tutorial https://www.onetap.com/resources/categories/cheat.13/
    */
  namespace Cheat {
    /**
     * Returns your forum username.
     */
    function GetUsername(): string;

    /**
     * Sends a message to an in-game chat.
     */
    function PrintChat(message: string): void;

    /**
     * Registers a callback within a said function.
     * @description
     * @param callback - all listed functions or any other {@link https://wiki.alliedmods.net/Counter-Strike:_Global_Offensive_Events|game event}
     * @param func - name of a JS/TS function
     * @tutorial https://www.onetap.com/resources/registercallback.6/
     */
    function RegisterCallback(callback: csgoCallback, func: string): void;

    /**
     * Execute commands in in-game console
     * @example Cheat.ExecuteCommand("say hello");
     */
    function ExecuteCommand(cmd: string): void;

    /**
     * Print a message to an in-game console
     */
    function Print(message: string): void;

    /**
     * Print a message similarly as Cheat.Print in addition you can make your console output in different colors
     * @summary print color text to console
     * @param rgba - array with [ r, g, b, a ] color values - from 0-255
     */
    function PrintColor(color: Color, message: string): void;

  }
  /**
    * @tutorial https://www.onetap.com/resources/categories/input.14/
    */
  namespace Input {
    function ForceCursor(value: boolean): void;
    /**
     * Returns an array object with X, Y for cursor position
     * @returns [x: num, y: num ]
     */
    function GetCursorPosition(): [number, number];

    /**
     * #TODO
     * Returns boolean value whether or not a key was pressed.
     * @param key - {@link https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes|key values listed by microsoft}
     */
    function IsKeyPressed(key: any): boolean;

  }
  /**
   * @tutorial {@link https://www.onetap.com/resources/categories/world.15/}
   */
  namespace World {
    /**
     * @returns string representation of server IP
     */
    function GetServerString(): string;

    /** 
     * Returns current map name
     */
    function GetMapName(): string;

  }
  /**
   * @tutorial https://www.onetap.com/resources/categories/antiaim.17/
   */
  namespace AntiAim {
    /**
     * Sets the LBY offset of your fake angle.
     * @param degree (-180 to 180)
     */
    function SetLBYOffset(degree: number): void

    /**
     * Sets the offset of your Real angle. Your Real angle is relative to your Fake
     * @param degree (-180 to 180) 
     */
    function SetRealOffset(degree: number): void

    /**
     * Sets the offset of your Fake angle. Fake is the master offset of the AntiAim functions, your Real and LBY are relative to the fake offset.
     * @param degree (-180 to 180) 
     */
    function SetFakeOffset(degree: number): void

    /**
     * @returns the anti-aim override state.
     */
    function GetOverride(): boolean;

    /**
     * Enables/disables anti-aim overriding.
     * @param state (0 = disabled, 1 = enabled)
     * @see https://www.onetap.com/resources/setoverride.126/
     */
    function SetOverride(state: 0 | 1): void;

  }
  namespace Exploit {
    /**
     * Lower value results in faster double-tap.
     * @param { number } int - Default value is *2*, maximum is clamped to *8*
     */
    function OverrideTolerance(int: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8): void;

    /**
     * Higher value results in faster double-tap.
     * @param { number } int - Default value is *12*, maximum value is clamped to *14*
     */
    function OverrideShift(int: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14): void;

    /**
     * Enable automatic recharge
     * #TODO wtf does that mean
     * example??
     */
    function EnableRecharge(): void;

    /**
     * Disables automatic recharging
     */
    function DisableRecharge(): void;


    /**
     * Forces a recharge
     */
    function Recharge(): void;

    /**
     * @returns fraction in range 0 to 1
     */
    function GetCharge(): number;
  }
  namespace RageBot {
    /**
     * Ignores a target for 1 tick.   
     * Note: ForceTarget is only active for 1 tick and must be called on CreateMove callback.
     */
    function IgnoreTarget(entity_index: EntityIndex): void;

    /**
     * Forces safety on a specific hitbox   
     * Note: ForceHitboxSafety is only active for 1 tick and must be called on CreateMove callback.
     */
    function ForceHitboxSafety(hitbox_index: HitboxIndex): void;

    /**
     * Overrides minimum damage on a specific target   
     * Note: ForceTargetMinimumDamage is only active for 1 tick and must be called on CreateMove callback.
     */
    function ForceTargetMinimumDamage(entity_index: EntityIndex, minimum_damage: number): void;

    /**
     * Overrides hitchance on a specific target   
     * Note: ForceTargetHitchance is only active for 1 tick and must be called on CreateMove callback.
     */
    function ForceTargetHitchance(entity_index: EntityIndex, hitchance: number): void;

    /**
     * Forces safety on a specific target.   
     * Note: ForceTargetSafety is only active for 1 tick and must be called on CreateMove callback.
     */
    function ForceTargetSafety(entity_index: EntityIndex): void;

    /**
     * Forces the rage-bot to target a specific entity.   
     * Note: ForceTarget is only active for 1 tick and must be called on CreateMove callback.
     */
    function ForceTarget(entity_index: EntityIndex): void;

    /**
     * Used to get ragebot target.
     */
    function GetTarget(): EntityIndex;
  }
  namespace Material {
    /**
      * Returns true if material was created successfully or false otherwise.
      * @tutorial https://www.onetap.com/resources/create.162/
      */
    function Create(name: string): boolean;

    /**
     * Used to set key values. Can only be used in material callback!
     * @see {@link https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters| List of shader parameters}
     * @see {@link https://developer.valvesoftware.com/wiki/VertexLitGeneric| VertexLitGeneric docs}
     */
    function SetKeyValue(material_index: number, key: string, value: string): boolean;

    /**
     * Used to apply new set key values. Can only be used in material callback!
     */
    function Refresh(material_index: number): boolean;

    /**
     * Used to get material index. Can only be used in material callback!
     */
    function Get(name: string): number;

    /**
     * Returns true if material was destroyed successfully.
     */
    function Destroy(name: string): boolean;
  }

  type EntityIndex = number | (() => number);

  interface WeaponInfo {
    inaccuracy_jump_initial: any,
    price: any,
    kill_award: any,
    cycle_time: any,
    cycle_time_alt: any,
    damage: any,
    armor_ratio: any,
    penetration: any,
    range: any,
    max_speed: any,
    max_speed_alt: any,
    spread: any,
    spread_alt: any,
    inaccuracy_crouch: any,
    inaccuracy_crouch_alt: any,
    inaccuracy_stand: any,
    inaccuracy_stand_alt: any,
    inaccuracy_jump_apex: any,
    inaccuracy_jump: any,
    inaccuracy_jump_alt: any,
    inaccuracy_land: any,
    inaccuracy_land_alt: any,
    inaccuracy_ladder: any,
    inaccuracy_ladder_alt: any,
    inaccuracy_fire: any,
    inaccuracy_fire_alt: any,
    inaccuracy_move: any,
    inaccuracy_move_alt: any,
    inaccuracy_reload: any
  }

  type hotkeyState = "Always | Toggle | Hold | ";
  type Color = [number, number, number, number];
  type RenderBox = [string, number, number, number, number];
  type font = any;
  type ClassId = number;

  type csgoCallback = "CreateMove" | "Draw" | "Unload" | "Material" | "ragebot_fire" | "FRAME_START" | "FRAME_RENDER_START" | "FRAME_RENDER_END" | "FRAME_NET_UPDATE_START" | "FRAME_NET_UPDATE_END" | "FRAME_NET_UPDATE_POSTDATAUPDATE_START" | "FRAME_NET_UPDATE_POSTDATAUPDATE_END";


  const enum FrameStage {
    FRAME_START,
    FRAME_NET_UPDATE_START,
    FRAME_NET_UPDATE_POSTDATAUPDATE_START,
    FRAME_NET_UPDATE_POSTDATAUPDATE_END,
    FRAME_NET_UPDATE_END,
    FRAME_RENDER_START,
    FRAME_RENDER_END
  }

  const enum HitboxIndex {
    HITBOX_HEAD,
    HITBOX_NECK,
    HITBOX_PELVIS,
    HITBOX_BODY,
    HITBOX_THORAX,
    HITBOX_CHEST,
    HITBOX_UPPER_CHEST,
    HITBOX_RIGHT_THIGH,
    HITBOX_LEFT_CALF,
    HITBOX_RIGHT_CALF,
    HITBOX_LEFT_FOOT,
    HITBOX_RIGHT_FOOT,
    HITBOX_LEFT_HAND,
    HITBOX_RIGHT_HAND,
    HITBOX_LEFT_UPPER_ARM,
    HITBOX_LEFT_FOREARM,
    HITBOX_RIGHT_UPPER_ARM,
    HITBOX_RIGHT_FOREARM,
  }
}
