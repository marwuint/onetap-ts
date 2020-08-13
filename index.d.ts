export {}

declare global {
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

    namespace UI {

    }

    namespace Entity {

    }

    namespace Render {

    }

    namespace Convar {

    }

    /**
     * #TODO
     */
    namespace Event {

    }

    /**
     * #TODO
     */
    namespace Trace {

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
        function GetMovement(): [ number, number, number ];

        /**
         * Control user angles.
         */
        function SetViewAngles(angles: [ number, number, number ], silent: boolean): void;

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
        function SetMovement(m: [ number, number, number ]): void;

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
        function GetViewAngles(): [ number, number, number ];

        /**
         * Sets user-defined view angles.
         * @param angles - [ pitch, yaw, roll ]
         */
        function SetViewAngles(angles: [ number, number, number ]): void;
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
        function PrintColor(color: rgba, message: string): void;

    }

    /**
     * @tutorial https://www.onetap.com/resources/categories/input.14/
     */
    namespace Input {
        /**
         * Returns an array object with X, Y for cursor position
         * @returns [x: num, y: num ]
         */
        function GetCursorPosition(): [ number, number ];

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

    namespace AntiAim {

    }

    /**
     * @tutorial {@link https://www.onetap.com/resources/categories/exploit.18/}
     */
    namespace Exploit {
        /**
         * Lower value results in faster double-tap.
         * @param { number } int - Default value is *2*, maximum is clamped to *8*
         */
        function OverrideTolerance(int: 1|2|3|4|5|6|7|8): void;

        /**
         * Higher value results in faster double-tap.
         * @param { number } int - Default value is *12*, maximum value is clamped to *14*
         */
        function OverrideShift(int: 1|2|3|4|5|6|7|8|9|10|11|12|13|14): void;

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

    }

    namespace Material {

    }

    type csgoCallback = "CreateMove" | "Draw" | "Unload" | "Material" | "ragebot_fire" | "FRAME_START" | "FRAME_RENDER_START" | "FRAME_RENDER_END" | "FRAME_NET_UPDATE_START" | "FRAME_NET_UPDATE_END" | "FRAME_NET_UPDATE_POSTDATAUPDATE_START" | "FRAME_NET_UPDATE_POSTDATAUPDATE_END";

    type rgba = [ number, number, number, number? ];

    const enum FrameStage {
        FRAME_START,
        FRAME_NET_UPDATE_START,
        FRAME_NET_UPDATE_POSTDATAUPDATE_START,
        FRAME_NET_UPDATE_POSTDATAUPDATE_END,
        FRAME_NET_UPDATE_END,
        FRAME_RENDER_START,
        FRAME_RENDER_END
    }

}


