import { Button } from "@/components/base/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";

export function ExampleDialog() {
  return (
    <Dialog>
      <DialogTrigger>Dialog</DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Terms & Conditions</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogContent>
          <div className="space-y-4 text-neutral-11 text-paragraph-14 [&_strong]:text-label-14 [&_strong]:text-neutral-12">
            <div className="space-y-4">
              <div className="space-y-1">
                <p>
                  <strong>Acceptance of Terms</strong>
                </p>
                <p>
                  By accessing and using this website, users agree to comply
                  with and be bound by these Terms of Service. Users who do not
                  agree with these terms should discontinue use of the website
                  immediately.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>User Account Responsibilities</strong>
                </p>
                <p>
                  Users are responsible for maintaining the confidentiality of
                  their account credentials. Any activities occurring under a
                  user&apos;s account are the sole responsibility of the account
                  holder. Users must notify the website administrators
                  immediately of any unauthorized account access.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Content Usage and Restrictions</strong>
                </p>
                <p>
                  The website and its original content are protected by
                  intellectual property laws. Users may not reproduce,
                  distribute, modify, create derivative works, or commercially
                  exploit any content without explicit written permission from
                  the website owners.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Limitation of Liability</strong>
                </p>
                <p>
                  The website provides content &ldquo;as is&rdquo; without any
                  warranties. The website owners shall not be liable for direct,
                  indirect, incidental, consequential, or punitive damages
                  arising from user interactions with the platform.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>User Conduct Guidelines</strong>
                </p>
                <ul className="list-disc pl-6">
                  <li>Not upload harmful or malicious content</li>
                  <li>Respect the rights of other users</li>
                  <li>
                    Avoid activities that could disrupt website functionality
                  </li>
                  <li>Comply with applicable local and international laws</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Modifications to Terms</strong>
                </p>
                <p>
                  The website reserves the right to modify these terms at any
                  time. Continued use of the website after changes constitutes
                  acceptance of the new terms.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Termination Clause</strong>
                </p>
                <p>
                  The website may terminate or suspend user access without prior
                  notice for violations of these terms or for any other reason
                  deemed appropriate by the administration.
                </p>
              </div>
              <div className="space-y-1">
                <p>
                  <strong>Governing Law</strong>
                </p>
                <p>
                  These terms are governed by the laws of the jurisdiction where
                  the website is primarily operated, without regard to conflict
                  of law principles.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogFooter>
          <DialogClose render={<Button>Accept</Button>} />
          <DialogClose render={<Button intent="secondary">Cancel</Button>} />
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
