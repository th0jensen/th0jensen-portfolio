import { h } from "preact";
import { ArrowRight, Github, Linkedin } from "lucide-preact";
import { Button } from "~/components/ui/button.tsx";
import { Card } from "~/components/ui/card.tsx";
import Layout from "~/components/ComponentLayout.tsx"

function calculateAge(birthday: string): number {
  const [month, day, year] = birthday.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function Hero({ about }: { about: Data['about'] }) {
  const age = calculateAge(about.birthday);

  return (
    <Layout id={"hero"}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.5s ease-out forwards;
        }
      `}</style>

      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-zinc-100/50 to-zinc-200/50 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-800/50 light:invert dark:no-invert" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1730388155950-5152d33f9aeb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`}} />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Info Card */}
          <div className="w-full lg:w-1/2 animate-fadeInUp">
            <Card className="overflow-hidden bg-white/80 p-8 backdrop-blur-sm dark:bg-zinc-900/80">
              <h1 className="mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
                {about.firstName} {about.lastName}
              </h1>

              <p className="mb-6 text-xl text-muted-foreground md:text-2xl">
                {age} year old Software Developer
              </p>

              <p className="mb-8 text-lg text-foreground/80 md:text-xl">
                {about.description || "Passionate about backend, services, and optimisation."}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button className="group" size="lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" size="lg">
                    <Github className="mr-2 h-5 w-5" />
                    Github
                  </Button>
                  <Button variant="outline" size="lg">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Profile Image */}
          <div className="w-full lg:w-1/2 animate-fadeInScale">
            <div className="relative mx-auto w-72 md:w-96">
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary to-secondary opacity-30 blur" />
              <img
                src="/headshot.jpg"
                alt="Profile"
                className="relative rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
