import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">AI Translator</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Powered by OpenAI and Bhashini for text processing and Indian language translation.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="mailto:support@aitranslator.com" className="text-muted-foreground hover:text-foreground">
                  support@aitranslator.com
                </a>
              </li>
              <li>
                <a href="https://twitter.com/aitranslator" className="text-muted-foreground hover:text-foreground">
                  @aitranslator
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Translator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

