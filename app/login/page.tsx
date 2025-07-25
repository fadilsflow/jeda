"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTimerBackground } from "@/lib/hooks/use-timer-background";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function SignInPage() {
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [discordLoading, setDiscordLoading] = useState(false);
  const backgroundColor = useTimerBackground();

  const handleDiscordSignIn = async () => {
    setDiscordLoading(true);
    await authClient.signIn
      .social({
        provider: "discord",
      })
      .finally(() => {
        setDiscordLoading(false);
      });
  };

  const handleGitHubSignIn = async () => {
    setGithubLoading(true);
    await authClient.signIn
      .social({
        provider: "github",
      })
      .finally(() => {
        setGithubLoading(false);
      });
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    await authClient.signIn
      .social({
        provider: "google",
      })
      .finally(() => {
        setGoogleLoading(false);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative dark"
      style={{ backgroundColor }}
    >
      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-4xl font-medium dark:text-foreground flex items-center justify-center gap-2">
            Welcome{" "}
            <span className="flex items-center justify-center">
              t<Image src="/icon.svg" alt="Jeda" width={40} height={40} />
            </span>{" "}
            Jeda!
          </h2>
          <p className="text-center text-xs font-medium dark:text-foreground">
            New here or coming back? Choose how you want to continue
          </p>
        </div>

        <div className="space-y-4">
          <Button
            variant="default"
            onClick={handleGoogleSignIn}
            className="w-full font-normal"
            disabled={githubLoading || googleLoading || discordLoading}
          >
            {googleLoading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 128 128"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <path
                      fill="#fff"
                      d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"
                    ></path>
                    <path
                      fill="#e33629"
                      d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"
                    ></path>
                    <path
                      fill="#f8bd00"
                      d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"
                    ></path>
                    <path
                      fill="#587dbd"
                      d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                    ></path>
                    <path
                      fill="#319f43"
                      d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"
                    ></path>
                  </svg>
                  Continue with Google
                </div>
              </>
            )}
          </Button>

          <Button
            variant="default"
            onClick={handleGitHubSignIn}
            className="w-full font-normal"
            disabled={githubLoading || googleLoading || discordLoading}
          >
            {githubLoading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 128 128"
                    className="w-4 h-4"
                    fill="currentColor"
                  >
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                      ></path>
                      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                    </g>
                  </svg>
                  Continue with GitHub
                </div>
              </>
            )}
          </Button>
          <Button
            variant="default"
            onClick={handleDiscordSignIn}
            className="w-full font-normal"
            disabled={discordLoading || googleLoading || githubLoading}
          >
            {discordLoading ? (
              <Loader className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    imageRendering="optimizeQuality"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#5865F2"
                      d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z"
                    />
                    <g>
                      <g>
                        <path
                          fill="#fff"
                          fillRule="nonzero"
                          d="M360.932 160.621a250.49 250.49 0 00-62.384-19.182 174.005 174.005 0 00-7.966 16.243 232.677 232.677 0 00-34.618-2.602c-11.569 0-23.196.879-34.623 2.58-2.334-5.509-5.044-10.972-7.986-16.223a252.55 252.55 0 00-62.397 19.222c-39.483 58.408-50.183 115.357-44.833 171.497a251.546 251.546 0 0076.502 38.398c6.169-8.328 11.695-17.193 16.386-26.418a161.718 161.718 0 01-25.813-12.318c2.165-1.569 4.281-3.186 6.325-4.756 23.912 11.23 50.039 17.088 76.473 17.088 26.436 0 52.563-5.858 76.475-17.09 2.069 1.689 4.186 3.306 6.325 4.756a162.642 162.642 0 01-25.859 12.352 183.919 183.919 0 0016.386 26.396 250.495 250.495 0 0076.553-38.391l-.006.006c6.278-65.103-10.724-121.529-44.94-171.558zM205.779 297.63c-14.908 0-27.226-13.53-27.226-30.174 0-16.645 11.889-30.294 27.179-30.294 15.289 0 27.511 13.649 27.249 30.294-.261 16.644-12.007 30.174-27.202 30.174zm100.439 0c-14.933 0-27.202-13.53-27.202-30.174 0-16.645 11.889-30.294 27.202-30.294 15.313 0 27.44 13.649 27.178 30.294-.261 16.644-11.984 30.174-27.178 30.174z"
                        />
                      </g>
                    </g>
                  </svg>
                  Continue with Discord
                </div>
              </>
            )}
          </Button>

          <div className="relative my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-300 font-mono">
              or just vibe
            </span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          <AlertDialog>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <AlertDialogTrigger asChild>
                  <Button className="w-full font-normal">
                    👻 Continue as ghost
                  </Button>
                </AlertDialogTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Nothing will be saved. You&apos;re just a shadow in the wind
                  🌬️
                </p>
              </TooltipContent>
            </Tooltip>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>👻 Ghost mode </AlertDialogTitle>
                <AlertDialogDescription>
                  Your data will only live in your browser. If you close it,
                  poof — it&apos;s gone 🫥
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-muted text-foreground hover:bg-muted/80">
                  Hmm... maybe I *will* log in
                </AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-500 text-white hover:bg-red-600"
                  asChild
                >
                  <Link href="/">YEAH, I&apos;m good 😎</Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <p className="text-xs mt-3 text-center text-white/70 font-mono italic">
            Logging in unlocks streaks, progress sync, and secret productivity
            sauce 🔐🔥
          </p>
        </div>

        <p className="text-xs  text-center  absolute bottom-10 left-0 right-0 font-mono dark:text-foreground">
          By signing in you agree to our{" "}
          <a href="/terms" className="underline">
            Terms of service
          </a>{" "}
          &{" "}
          <a href="/privacy" className="underline">
            Privacy policy
          </a>
        </p>
      </div>
    </div>
  );
}
